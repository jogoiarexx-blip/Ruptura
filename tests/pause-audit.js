const fs=require('fs');
const m=fs.readFileSync('js/main.js','utf8');
const l=fs.readFileSync('js/core/level-loader.js','utf8');
for(const x of [
  'async function setGamePaused(value)',
  'LevelRuntime?.pause?.()',
  'audioCtx.suspend()',
  "if(paused||modalOpen||state==='menu'){updateUI();return}",
  "saveKey='ruptura-save-v040'"
]) if(!m.includes(x)) throw Error('missing '+x);
for(const x of ['pause(){','resume(){','remaining','runtimePaused']) if(!l.includes(x)) throw Error('loader missing '+x);
console.log('PASS pause-audit v0.4.0');
