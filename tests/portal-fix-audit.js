const fs=require('fs');
const m=fs.readFileSync('js/main.js','utf8');
for(const s of [
  "saveKey='ruptura-save-v043'",
  "targetH=p.id==='void'?164:156",
  'ctx.drawImage(img,-dw/2,-dh+16,dw,dh)',
  "labelW=p.id==='emerald'||p.id==='void'?170:156",
  "gray:{id:'gray',name:'PORTAL CINZA',rank:'F',x:1085,y:360",
  "emerald:{id:'emerald',name:'PORTAL ESMERALDA',rank:'C',x:1585,y:360"
]){ if(!m.includes(s)) throw Error('missing '+s); }
for(const f of ['assets/portals/gray/0.webp','assets/portals/blue/0.webp','assets/portals/violet/0.webp','assets/portals/emerald/0.webp','assets/portals/red/0.webp','assets/portals/gold/0.webp','assets/portals/void/0.webp']){
  if(!fs.existsSync(f)) throw Error('missing '+f);
}
console.log('PASS portal-fix-audit v0.4.3');
