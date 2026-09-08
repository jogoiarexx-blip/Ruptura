const fs=require('fs');
const must=['assets/player/idle/0.png','assets/player/walk/0.png','assets/player/attack/0.png','assets/enemies/crawler/0.png','assets/enemies/brute/0.png','assets/enemies/reaper/0.png','assets/enemies/agent/0.png'];
for(const f of must) if(!fs.existsSync(f)) throw Error('missing '+f);
const m=fs.readFileSync('js/main.js','utf8');
for(const s of ['playerSpriteSets','enemySpriteSets','drawEnemyFallback',"saveKey='ruptura-save-v036'"]) if(!m.includes(s)) throw Error('missing '+s);
console.log('PASS sprite-audit v0.3.6');
