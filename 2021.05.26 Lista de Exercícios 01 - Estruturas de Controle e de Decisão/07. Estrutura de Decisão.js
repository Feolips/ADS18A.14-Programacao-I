
// 				ESTRUTURA DE DECISÃO
// 07. Ler dois valores e a operação matemática desejava e retornar o resultado:

// Entrada de dados
input = require("prompt-sync")();
let valorA = parseFloat(input("Insira o primeiro valor:"));
let valorB = parseFloat(input("Insira o segundo valor:"));
let operacao = (input("Insira a operação:"));

// Estrutura de decisão

if (operacao == "+"){
	console.log("O resultado é", valorA + valorB);
}
else if (operacao == "-"){
	console.log("O resultado é", valorA - valorB);
}
else if (operacao == "*"){
	console.log("O resultado é", valorA * valorB);
}
else if (operacao == "/"){
	console.log("O resultado é", valorA / valorB);
}
else {console.log("opção inválida")}
