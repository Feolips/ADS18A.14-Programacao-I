
//					ESTRUTURA DE REPETIÇÃO
// 01. Escrever um programa que leia através do teclado um conjunto
//     indeterminado de valores até que um valor nulo (igual a zero)
//     seja informado. Identificar e exibir o maior e o menor número
//     informado.


// Entrada de dados
input = require("prompt-sync")();
let valor = [];
let i = 1;
valor[1] = input("Insira o primeiro valor: ")
while (valor[i] != 0){
	valor[i] = input("Insira outro valor (ou 0 para sair): ");
	i++;
}

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
