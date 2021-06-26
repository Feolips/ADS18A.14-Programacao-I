
//							ESTRUTURA DE REPETIÇÃO
// 07. Na Sequência de Fibonacci cada termo é obtido pela soma dos dois termos
//     anteriores. Escrever um programa para calcular e imprimir todos os termos
//     da sequência de Fibonacci menores do que N, previamente lido.
//     Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, …

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor inteiro: "));
let fibonacci = 0;
// Condicional e Repetição
if (N > 2){ 
	let i;
	let fi_1Ant = 1;
	let fi_2Ant = 0;
	for (i = 1; i <= N ; i++){
		console.log(i + "° número de Fibonacci: " + fibonacci);
		fi_2Ant = fi_1Ant;
		fi_1Ant = fibonacci;
		fibonacci = fi_1Ant + fi_2Ant;
	}
} else {console.log("Insira um valor a partir de 3.")}
// Retorno
//console.log("Para N = " + N + " temos Fibonacci = " + H + '.');
