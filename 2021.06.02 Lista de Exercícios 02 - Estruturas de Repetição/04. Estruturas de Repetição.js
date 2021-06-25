
//							ESTRUTURA DE REPETIÇÃO
// 04. Dadas as notas obtidas por cada aluno de uma disciplina, escrever um pro-
//     grama para ler essas notas. O programa deve calcular e exibir a média a-
//     ritmética das notas dos alunos. Considerar o flag como sendo a nota 99.

// Entrada de dados
input = require("prompt-sync")();
let ciclo = 0;
let somatorio = 0;
let nota = 0;

while (nota != 99){
	if (nota === 99); // { break; }
	ciclo++
	nota = parseInt(input("Atribua nova nota ao aluno (ou 99 para sair): "));
	somatorio += nota;
}
somatorio = somatorio - 99; // Isso resolve o excesso de nota :D
media = somatorio/ciclo;
// Retorno
console.log("O aluno somou um total de " + somatorio + " atingindo média aritmética de " + media + ".");


