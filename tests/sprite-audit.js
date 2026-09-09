const fs=require('fs');
const must=['assets/player/idle/0.webp','assets/player/walk/0.webp','assets/player/attack/0.webp','assets/enemies/crawler/0.webp','assets/enemies/brute/0.webp','assets/enemies/reaper/0.webp','assets/enemies/agent/0.webp'];
for(const f of must) if(!fs.existsSync(f)) throw Error('missing '+f);
const m=fs.readFileSync('js/main.js','utf8');
for(const s of ['playerSpriteSets','enemySpriteSets','drawEnemyFallback',"saveKey='ruptura-save-v040'"]) if(!m.includes(s)) throw Error('missing '+s);
console.log('PASS sprite-audit v0.4.0');
