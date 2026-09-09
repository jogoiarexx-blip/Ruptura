const fs=require('fs'),vm=require('vm');
const ids=['gray','blue','violet','emerald','red','gold','void','eclipse','duel','infiltracao','cacada'];
const dirs=['cinza','azul','violeta','esmeralda','vermelho','dourado','vazio','eclipse','duelo','infiltracao','cacada'];
for(let i=0;i<ids.length;i++){
  let reg={};
  const c={RupturaRegisterLevel:(id,d)=>reg[id]=d,RupturaRegisterLevelRooms:(id,r)=>{if(!reg[id])throw Error('rooms before level '+id);reg[id].rooms=r}};
  vm.createContext(c);
  for(const f of ['level.js','rooms.js'])vm.runInContext(fs.readFileSync(`fases/${dirs[i]}/${f}`,'utf8'),c);
  if(!reg[ids[i]]?.rooms?.length)throw Error('invalid '+ids[i]);
}
const m=fs.readFileSync('js/main.js','utf8');
if(!m.includes("saveKey='ruptura-save-v043'"))throw Error('save');
console.log('PASS loader-audit v0.4.3: 7 ruptures + 4 story missions split');
