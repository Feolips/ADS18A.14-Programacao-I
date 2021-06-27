
//							ESTRUTURA DE REPETIÇÃO
// 05. Escrever um programa para calcular e escrever o fatorial de um número in-
//     teiro N, sabendo-se que:
//                             N! = 1 {se N = 0}
//                                    ou
//                        N! = 1 x 2 x 3 x N {se N > 0}

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor: "));
let fatorial = 1;
// Condicional e Repetição
if (N > 1){
	for (var i = N; i > 1 ; i--){
		fatorial = fatorial * i;
	}
} else if (N === 0 || N === 1) {
	fatorial = 1;
} else if (N < 0) {
	fatorial = "um valor inválido";
  }
// Retorno
console.log("O fatorial de " + N + " é " + fatorial + '.')
