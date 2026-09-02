(()=>{
  'use strict';
  const registry=window.__RUPTURA_LEVELS__=window.__RUPTURA_LEVELS__||Object.create(null);
  const scripts=new Map();
  const runtimeTimers=new Set();
  const runtimeIntervals=new Set();
  const runtimeListeners=[];
  let runtimePaused=false;
  function scheduleTimeout(rec){
    rec.started=performance.now();
    rec.id=setTimeout(()=>{runtimeTimers.delete(rec);rec.id=null;if(!runtimePaused)rec.fn()},Math.max(0,rec.remaining));
  }
  function scheduleInterval(rec){
    rec.started=performance.now();
    rec.id=setTimeout(function tick(){
      if(!runtimePaused){try{rec.fn()}catch(err){console.error('[level-runtime-interval]',err)}}
      rec.started=performance.now();
      rec.id=setTimeout(tick,rec.ms);
    },rec.remaining??rec.ms);
  }

  window.RupturaRegisterLevel=function(id,data){
    if(!id||!data) throw new Error('RupturaRegisterLevel: dados inválidos');
    registry[id]=data;
  };
  window.RupturaRegisterLevelRooms=function(id,rooms){
    if(!registry[id]) throw new Error('RupturaRegisterLevelRooms: carregue level.js primeiro');
    registry[id].rooms=rooms;
  };

  window.LevelRuntime={
    timeout(fn,ms){const rec={fn,remaining:ms,id:null,started:performance.now()};runtimeTimers.add(rec);if(!runtimePaused)scheduleTimeout(rec);return rec},
    interval(fn,ms){const rec={fn,ms,remaining:ms,id:null,started:performance.now()};runtimeIntervals.add(rec);if(!runtimePaused)scheduleInterval(rec);return rec},
    listen(target,type,fn,opts){target.addEventListener(type,fn,opts);runtimeListeners.push([target,type,fn,opts]);return fn},
    pause(){
      if(runtimePaused)return;runtimePaused=true;const now=performance.now();
      for(const rec of runtimeTimers){if(rec.id){clearTimeout(rec.id);rec.remaining=Math.max(0,rec.remaining-(now-rec.started));rec.id=null}}
      for(const rec of runtimeIntervals){if(rec.id){clearTimeout(rec.id);rec.remaining=Math.max(0,rec.ms-(now-rec.started));rec.id=null}}
    },
    resume(){
      if(!runtimePaused)return;runtimePaused=false;
      for(const rec of runtimeTimers)if(!rec.id)scheduleTimeout(rec);
      for(const rec of runtimeIntervals)if(!rec.id)scheduleInterval(rec);
    },
    clear(){
      for(const rec of runtimeTimers) if(rec.id)clearTimeout(rec.id);runtimeTimers.clear();
      for(const rec of runtimeIntervals) if(rec.id)clearTimeout(rec.id);runtimeIntervals.clear();
      for(const [target,type,fn,opts] of runtimeListeners) target.removeEventListener(type,fn,opts);runtimeListeners.length=0;runtimePaused=false;
    },
    stats(){return {timeouts:runtimeTimers.size,intervals:runtimeIntervals.size,listeners:runtimeListeners.length,paused:runtimePaused}}
  };

  const $=id=>document.getElementById(id);
  const LoadingScreen={
    overlay:null,title:null,bar:null,pct:null,status:null,tip:null,error:null,retry:null,spinner:null,lastRetry:null,
    init(){
      this.overlay=$('loadingScreen');this.title=$('loadingTitle');this.bar=$('loadingBar');this.pct=$('loadingPct');this.status=$('loadingStatus');this.tip=$('loadingTip');this.error=$('loadingError');this.retry=$('loadingRetry');this.spinner=$('loadingSpinner');
      this.retry?.addEventListener('click',()=>{const fn=this.lastRetry;this.lastRetry=null;const p=fn?.();if(p&&typeof p.catch==='function')p.catch(()=>{})});
    },
    show(meta){if(!this.overlay)this.init();this.title.textContent=`${meta.name} · RANK ${meta.rank}`;this.error.classList.add('hidden');this.retry.classList.add('hidden');this.status.textContent='Carregando...';this.tip.textContent=this.tipFor(meta.id);this.progress(0,0,1);this.overlay.classList.remove('hidden')},
    tipFor(id){const tips={gray:'DICA: use o dash para atravessar ataques perigosos.',blue:'DICA: alguns inimigos aplicam pressão à distância.',violet:'DICA: guarde mana para controlar grupos maiores.',emerald:'DICA: o Predador é rápido; parry pode interromper sua pressão.',red:'DICA: conserve stamina antes das fases avançadas do chefe.',gold:'DICA: inimigos Rank A punem ataques sem planejamento; use parry e Ecos.',void:'DICA: a Raid Rank S possui três chefes consecutivos. Preserve poções e stamina.',duel:'DICA: Darius é rápido. Parry e controle de stamina serão decisivos.',infiltracao:'DICA: sofrer pouco dano aumenta a recompensa de furtividade da Operação Fantasma.'};return tips[id]||'DICA: alguns inimigos possuem fraquezas diferentes.'},
    progress(done,total,label){const pct=total?Math.round(done/total*100):0;this.bar.style.width=pct+'%';this.pct.textContent=pct+'%';this.status.textContent=label||'Carregando...'},
    hide(){this.overlay?.classList.add('hidden')},
    fail(err,retry){if(!this.overlay)this.init();this.status.textContent='Não foi possível carregar a fase.';this.error.textContent=err?.message||'Falha de carregamento.';this.error.classList.remove('hidden');this.retry.classList.remove('hidden');this.lastRetry=retry||null;this.spinner?.classList.add('loading-error')}
  };
  window.LoadingScreen=LoadingScreen;

  function loadScript(url,{timeout=8000,retries=1}={}){
    return new Promise((resolve,reject)=>{
      let attempt=0;
      const run=()=>{
        attempt++;
        const old=scripts.get(url);if(old?.el) old.el.remove();
        const el=document.createElement('script');el.src=url;el.async=true;el.dataset.levelAsset='1';
        let settled=false;
        const timer=setTimeout(()=>finish(new Error(`Timeout ao carregar ${url}`)),timeout);
        const finish=err=>{if(settled)return;settled=true;clearTimeout(timer);el.onload=el.onerror=null;if(err){el.remove();console.error('[asset-load-error]',url,err);if(attempt<=retries)return run();reject(err)}else{scripts.set(url,{el});resolve(url)}};
        el.onload=()=>finish();el.onerror=()=>finish(new Error(`Falha ao carregar ${url}`));
        document.head.appendChild(el);
      };
      run();
    });
  }

  window.AssetManager={
    async loadLevel(meta,onProgress){
      const assets=(meta.resources||[meta.resource]).filter(Boolean),loaded=[];
      try{
        for(let i=0;i<assets.length;i++){
          const url=assets[i];onProgress?.(i,assets.length,`Carregando recurso ${i+1}/${assets.length}...`);
          await loadScript(url,{timeout:8000,retries:1});loaded.push(url);onProgress?.(i+1,assets.length,`Validando ${i+1}/${assets.length}...`);
        }
        const level=registry[meta.id];
        if(!level||!Array.isArray(level.rooms)||!level.rooms.length) throw new Error(`A fase ${meta.id} foi carregada, mas sua configuração é inválida.`);
        return {level,assets:loaded};
      }catch(err){this.unloadLevel(meta.id,loaded);throw err}
    },
    unloadLevel(id,assets=[]){
      for(const url of assets){const rec=scripts.get(url);if(rec?.el)rec.el.remove();scripts.delete(url)}
      if(id) delete registry[id];
    },
    cacheInfo(){return {loadedLevelScripts:scripts.size,registeredLevels:Object.keys(registry).length}}
  };

  let current=null,loading=false;
  window.LevelManager={
    async load(meta,{onReady,onError}={}){
      if(loading)return;loading=true;
      const attempt=async()=>{
        LoadingScreen.show(meta);
        try{
          if(current) await this.unloadCurrent();
          const pack=await AssetManager.loadLevel(meta,(d,t,l)=>LoadingScreen.progress(d,t,l));
          current={id:meta.id,assets:pack.assets,level:pack.level};
          LoadingScreen.progress(1,1,'Pronto');
          await new Promise(r=>setTimeout(r,60));
          LoadingScreen.hide();LoadingScreen.spinner?.classList.remove('loading-error');
          loading=false;onReady?.(pack.level);return pack.level;
        }catch(err){
          loading=false;onError?.(err);LoadingScreen.fail(err,()=>this.load(meta,{onReady,onError}));throw err;
        }
      };
      return attempt();
    },
    async unloadCurrent(){
      LevelRuntime.clear();
      if(current){AssetManager.unloadLevel(current.id,current.assets);current=null}
      return true;
    },
    current(){return current?.level||null},
    diagnostics(){return {current:current?.id||null,loading,...LevelRuntime.stats(),...AssetManager.cacheInfo()}}
  };

  window.SaveManager={
    persist(saveFn){try{saveFn?.();return true}catch(err){console.error('[save-error]',err);return false}}
  };

  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',()=>LoadingScreen.init(),{once:true}):LoadingScreen.init();
})();
