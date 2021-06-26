
//							ESTRUTURA DE REPETIÇÃO
// 08. Calcule e exiba o valor da seguinte expressão: T = S x P
//     Onde S é a soma de todos os inteiros de 1 a N, inclusive, e P é o produto
//     de todos os inteiros de 1 a M, inclusive. O valor de N e o de M serão li-
//     os através do teclado.

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor inteiro positivo N: "));
let M = parseInt(input("Insira um valor inteiro positivo M: "));
// Condicional e Repetição
if (M > 0 && N > 0){
	let i;
	let S = 0;
	for (i = 1; i <= M; i++){
		S++;
	}
	let P = 1;
	for (i = 1; i <= M; i++){
		P = P * i;
	}
	T = S * P;
} else if (M == 0 || N == 0){
	T = 0;
} else {T = "Insira um valor positivo"}
// Retorno
console.log("S x P = " + T + '.');
