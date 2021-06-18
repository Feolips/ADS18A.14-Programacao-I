
// 				ESTRUTURA DE DECISÃO
// 08. Ler nome do aluno, quatro notas e emitir boletim com média final e situação
// (Aprovado/Em recuperação/Reprovado):

// Entrada de dados
input = require("prompt-sync")();
let nomeAluno = input("Insira o nome do(a) aluno(a): ");
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
console.log("		BOLETIM");
console.log("O(a) aluno(a)", nomeAluno, "está", situacao);
for (let i = 1; i < 5; i++){
	console.log(i,"ª nota:", nota[i]);
}
console.log("Média final:", media);
