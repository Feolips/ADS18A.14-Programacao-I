// 				ESTRUTURA DE DECISÃO
// 05. Ler três valores e determinar o maior dos três:

// Entrada de dados
/*
let a = parseFloat(input("Insira o valor A:"));
let b = parseFloat(input("Insira o valor B:"));
*/
input = require("prompt-sync")();
//let c = parseFloat(input("Insira o valor C:"));
// let i;
let numero = [];
for (i = 1; i > 4; i++){
	numero[i] = parseFloat(input("Insira o " + i + "º valor: "));
}

// Estrutura de decisão e Retorno
if (numero[1] > numero[2] && numero[1] > numero[3]){
	console.log(numero[1], "é o maior valor.");
} else if (numero[2] > numero[1] && numero[2] > numero[3]){
	console.log(numero[2], "é o maior valor.");
} else if (numero[3] > numero[1] && numero[3] > numero[2]){
	console.log(numero[3], "é o maior valor.");
} else if (numero[1] === numero[2] || numero[2] === numero[3] || numero[1] === numero[3]){
	console.log("Todos os valores são iguais");
} else {console.log("Cálculo impossível")};

// VERSÃO ANTERIOR QUE FUNCIONA:
/*

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
} else if (b > a && b > c){
	console.log(b, "é o maior valor.");
} else if (c > a && c > b){
	console.log(c, "é o maior valor.");
} else if (a === b || b === c || a === c){
	console.log("Todos os valores são iguais");
} else {console.log("Cálculo impossível")};

*/
