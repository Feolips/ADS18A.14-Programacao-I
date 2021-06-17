// 				ESTRUTURA DE DECISÃO
// 05. Ler três valores e determinar o maior dos três:

// Entrada de dados
input = require("prompt-sync")();
let a = parseFloat(input("Insira o valor A:"));
let b = parseFloat(input("Insira o valor B:"));
let c = parseFloat(input("Insira o valor C:"));
/*
var i;
let numero = [];
for (i = 0; i > 3; i++){
	let numero[i] = parseFloat(input("Insira o", i, "º valor:")
}
*/
// Estrutura de decisão e Retorno
if (a > b && a > c){
	console.log(a, "é o maior valor.");
}
if (b > a && b > c){
	console.log(b, "é o maior valor.");
}
if (c > a && c > b){
	console.log(c, "é o maior valor.");
}
