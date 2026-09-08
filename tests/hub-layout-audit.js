const fs=require('fs');
const m=fs.readFileSync('js/main.js','utf8');
for(const s of [
  "saveKey='ruptura-save-v037'",
  "PORTAL CINZA',rank:'F',x:1110,y:355",
  "PORTAL AZUL',rank:'E',x:1295,y:355",
  "PORTAL VIOLETA',rank:'D',x:1480,y:355",
  "PORTAL ESMERALDA',rank:'C',x:1660,y:355",
  "PORTAL VERMELHO',rank:'B',x:1165,y:565",
  "PORTAL DOURADO',rank:'A',x:1415,y:565",
  "RUPTURA DO VAZIO',rank:'S',x:1650,y:565",
  "VAREK · SUPERVISOR',x:985,y:405",
  'ÁREA DE PORTAIS',
  'CENTRO OPERACIONAL'
]) if(!m.includes(s)) throw Error('missing '+s);
console.log('PASS hub-layout-audit v0.3.7');
