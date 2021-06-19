// 				ESTRUTURA DE DECISÃO
// 12.receba três notas e calcule a média ponderada com pesos 2,5, 3,5 e 4.
// Exibir as três notas e a média calculada.
// Média = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

// Entrada de dados
input = require("prompt-sync")();
let nota = [];
// Condicional:
for (i = 1; i < 4; i++){
	nota[i] = parseFloat(input("Insira a " + i + "ª nota: "));
}

let media = (nota[1] * 2.5 + nota[2] * 3.5 + nota[3] * 4)/10;
// Retorno:
for (i = 1; i < 4; i++){
	console.log("Nota " + i + ": " + nota[i]);
}
console.log("Média ponderada: " + media);
