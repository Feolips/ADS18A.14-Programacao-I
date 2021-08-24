console.clear();

var Data = new Date();
var DiaDaSemana = Data.getDay().toString().padStart(2,'0');
var DiaDoMês = Data.getDate().toString().padStart(2,'0');
let Mês = Data.getMonth().toString().padStart(2,'0');
let Ano = Data.getFullYear().toString().padStart(2,'0');
let Horas = Data.getHours().toString().padStart(2,'0');
let Minutos = Data.getMinutes().toString().padStart(2,'0');

console.log(Data, DiaDaSemana, DiaDoMês, Mês, Ano, Horas, Minutos);
console.log(DiaDoMês.padStart(2, '0'));