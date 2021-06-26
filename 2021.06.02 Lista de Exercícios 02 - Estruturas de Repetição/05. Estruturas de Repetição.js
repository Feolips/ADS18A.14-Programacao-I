
//							ESTRUTURA DE REPETIÇÃO
// 04. Escrever um programa para calcular e escrever o fatorial de um número in-
//     teiro N, sabendo-se que:
//                             N! = 1 {se N = 0}
//                                    ou
//                        N! = 1 x 2 x 3 x N {se N > 0}

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor: "));
let fatorial = N;
// Condicional e Repetição
if (N > 0){
	let i;
	for (i == N; i >= 1 ; i--){
		fatorial = fatorial * i;
	}
} else if (N == 0) {
	fatorial = 1;
} else if (N < 0) {
	fatorial = "um valor inválido";
  }
// Retorno
console.log("O fatorial de " + N + " é " + fatorial + '.')
