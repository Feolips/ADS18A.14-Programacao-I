
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

/*
let nota = [];
let media, totalPontos = 0; // É necessário iniciar com valor zero para o laço operar.

// Entrada das quatro notas:
for (let i = 1; i < 5; i++){
	nota[i] = parseFloat(input(i + "ª nota: "));
	totalPontos += nota[i];
	media = totalPontos / i;
//	console.log("Média parcial: ",media);
}

// Decisão da situação do aluno:
let situacao;
if (media >= 5){
	situacao = "aprovado.";
} else if (media >= 4 && media < 5) {
	situacao = "em recuperação.";
} else {situacao = "reprovado.";}

// Boletim:
console.log("	  BOLETIM");
console.log("O(a) aluno(a)", nomeAluno, "está " + situacao);
for (let i = 1; i < 5; i++){
	console.log(i + "ª nota:", nota[i].toPrecision(2.2));
}
console.log("Média final:", media.toPrecision(2.2));

*/
