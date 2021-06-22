
//					ESTRUTURA DE REPETIÇÃO
// 02. Escrever um programa para calcular a soma dos números inteiros existentes
//     entre 1 e "N", inclusive, onde o valor de "N" será lido através do tecla-
//     do. "N" obrigatoriamente deve receber um valor maior que 1. Caso o valor
//     de "N" seja menor ou igual a 1 o programa deve mostrar uma mensagem para o
//      usuário e encerrar a execução.

// Entrada de dados
input = require("prompt-sync")();
let valor = parseInt(input("Insira o primeiro valor: "))
let somatorio;
while (valor > 1){
	somatorio += valor;
	valor = parseInt(input("Insira outro valor (ou 0 para sair): "));
}

// Retorno
console.log("O somatório de todos os valores inseridos é: " + somatorio)


