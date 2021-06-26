
//							ESTRUTURA DE REPETIÇÃO
// 06. Sendo 𝐻 = 1 + 1/2 + 1/3 + ... 1/N, receba N e retorne H.

// Entrada de dados
input = require("prompt-sync")();
let N = parseInt(input("Insira um valor: "));
var H = 0;
// Condicional e Repetição
if (N > 0){ 
	let i;
	for (i == 1; i <= N ; i++){
		H = H + (1/i);
	}
} else {H = "Insira um valor positivo."}
// Retorno
console.log("Para N = " + N + " temos H = " + H + '.');
