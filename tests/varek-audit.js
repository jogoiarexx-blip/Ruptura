const fs=require('fs');
const m=fs.readFileSync('js/main.js','utf8');
const c=fs.readFileSync('css/style.css','utf8');
const must=[
  "saveKey='ruptura-save-v043'",
  "const varekSpriteSets={idle:frameList('assets/npcs/varek/idle/',4)};",
  'const varekPortrait=new Image();',
  'function varekFrame(){',
  "function drawNPC(n){if(n.id==='varek'){",
  'assets/npcs/varek/portrait.webp',
  'VAREK · TRANSMISSÃO'
];
for(const s of must){ if(!m.includes(s)) throw Error('missing '+s); }
if(!c.includes('.npc-portrait')) throw Error('missing portrait css');
for(let i=0;i<4;i++){ if(!fs.existsSync(`assets/npcs/varek/idle/${i}.webp`)) throw Error('missing varek idle '+i); }
if(!fs.existsSync('assets/npcs/varek/portrait.webp')) throw Error('missing portrait');
console.log('PASS varek-audit v0.4.3');
