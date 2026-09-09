const fs=require('fs');const sw=fs.readFileSync('sw.js','utf8'),pwa=fs.readFileSync('js/pwa.js','utf8'),main=fs.readFileSync('js/main.js','utf8');
for(const s of ["saveKey='ruptura-save-v040'"])if(!main.includes(s))throw Error('missing '+s);
for(const s of ['ruptura-full-offline-v040','assets/player/','assets/enemies/','assets/bosses/','fases/cinza/level.js','fases/vazio/rooms.js','cacheAllIndividually','CACHE_STATUS'])if(!sw.includes(s))throw Error('missing '+s);
for(const s of ['OFFLINE COMPLETO','CACHE_STATUS'])if(!pwa.includes(s))throw Error('missing '+s);
const assetCount=(sw.match(/\.\/assets\//g)||[]).length, phaseCount=(sw.match(/\.\/fases\//g)||[]).length;if(assetCount<100)throw Error('precache assets too small '+assetCount);if(phaseCount<20)throw Error('precache phases too small '+phaseCount);
console.log(`PASS pwa-offline-audit v0.4.0: ${assetCount} assets + ${phaseCount} phase files precached`);
