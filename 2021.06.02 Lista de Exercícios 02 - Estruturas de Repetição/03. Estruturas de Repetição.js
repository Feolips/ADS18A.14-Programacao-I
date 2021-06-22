
//					ESTRUTURA DE REPETIÇÃO
// 03. Dado um conjunto de valores positivos, lidos através do teclado, escrever
//     um programa para determinar a soma desses valores. Um valor negativo lido
//     indica o fim da leitura dos dados e não deve ser considerado na soma (es-
//     se último valor chama-se flag).

// Entrada de dados
input = require("prompt-sync")();
let valor = parseInt(input("Insira o primeiro valor: "))
let somatorio = 0;
while (valor >= 0){
	somatorio += valor;
	valor = parseInt(input("Adicione outro valor positivo ao somatório (ou negativo para sair): "));
}

// Retorno
console.log("O somatório de todos os valores positivos inseridos é: " + somatorio)


