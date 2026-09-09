const fs=require('fs');
const m=fs.readFileSync('js/main.js','utf8');
for(const s of [
  "saveKey='ruptura-save-v040'",
  "PORTAL CINZA',rank:'F',x:1085,y:360",
  "PORTAL AZUL',rank:'E',x:1250,y:360",
  "PORTAL VIOLETA',rank:'D',x:1415,y:360",
  "PORTAL ESMERALDA',rank:'C',x:1585,y:360",
  "PORTAL VERMELHO',rank:'B',x:1145,y:560",
  "PORTAL DOURADO',rank:'A',x:1375,y:560",
  "RUPTURA DO VAZIO',rank:'S',x:1595,y:560",
  "VAREK · SUPERVISOR',x:995,y:430",
  'ÁREA DE PORTAIS',
  'CENTRO OPERACIONAL'
]) if(!m.includes(s)) throw Error('missing '+s);
console.log('PASS hub-layout-audit v0.4.0');
