
//							ESTRUTURA DE REPETIÇÃO
// 09. Calcule e exiba o logaritmo neperiano a partir de um valor N:
//     Log. N.: 1 + 1/1! + 1/2! + ... + 1/N!

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor inteiro positivo N: "));
let somatorio = 0;
// Condicional e Repetição
if (N >= 0){
	let i;
	let fatorial = 1;
	for (i = 1; i <= N; i++){
		fatorial = fatorial * i;
		somatorio += (1/fatorial);
	}
//} else if (N == 0){
//	somatorio = 0;
} else if (N < 0){
	somatorio = "inválido, insira um valor positivo";
	}
// Retorno
console.log('O logaritmo neperiano de ' + N + ' é ' + somatorio + '.');
