// 				ESTRUTURA DE DECISÃO
// 04. Ler dois valores, calcular a diferença entre o maior e o menor, e exibir tudo:

// Entrada de dados
input = require("prompt-sync")();
let A = parseFloat(input("Insira um valor:"));
let B = parseFloat(input("Insira um valor:"));
let C;
// Estrutura de decisão
if (A > B){
	C = A - B;
} else {
	C = B - A;
}
// Retorno

console.log("A diferença entre", A, "e", B,"é" , C);
