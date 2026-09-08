(() => {
  const installBtn = document.getElementById('installBtn');
  const installStatus = document.getElementById('installStatus');
  let deferredPrompt = null;

  function setStatus(text) {
    if (installStatus) installStatus.textContent = text;
  }
  function showInstall(show) {
    if (!installBtn) return;
    installBtn.classList.toggle('hidden', !show);
  }
  function markInstalled() {
    showInstall(false);
    document.body.classList.add('pwa-installed');
    setStatus('INSTALADO NO DISPOSITIVO');
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(() => {
        setStatus('PREPARANDO MODO OFFLINE COMPLETO...');
        const askStatus=()=>navigator.serviceWorker.controller?.postMessage('CACHE_STATUS');
        if(navigator.serviceWorker.controller) askStatus(); else navigator.serviceWorker.ready.then(()=>setTimeout(askStatus,250));
      }).catch(() => {
        setStatus('FALHA AO REGISTRAR O MODO OFFLINE');
      });
    });
  } else {
    setStatus('NAVEGADOR SEM SUPORTE A SERVICE WORKER');
  }


  navigator.serviceWorker?.addEventListener?.('message', event => {
    if (event.data?.type === 'CACHE_STATUS') {
      const {ready,total,complete} = event.data;
      setStatus(complete ? `OFFLINE COMPLETO · ${ready}/${total} ARQUIVOS` : `CACHE OFFLINE · ${ready}/${total}`);
    }
  });

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    showInstall(true);
    setStatus('TOQUE EM INSTALAR JOGO');
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) {
        setStatus(window.matchMedia('(display-mode: standalone)').matches ? 'JOGO JÁ INSTALADO' : 'USE O MENU DO NAVEGADOR PARA INSTALAR');
        return;
      }
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        setStatus('INSTALAÇÃO ACEITA');
      } else {
        setStatus('INSTALAÇÃO CANCELADA');
      }
      deferredPrompt = null;
      showInstall(false);
    });
  }

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    markInstalled();
  });

  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
    markInstalled();
  } else {
    showInstall(false);
  }
})();
