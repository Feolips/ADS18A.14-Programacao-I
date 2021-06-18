// 				ESTRUTURA DE DECISÃO
// 06. Ler o nome e a idade de três pessoas e retornar o nome da pessoa mais velha
// e da mais nova:

// Entrada de dados
input = require("prompt-sync")();
let nome = [];
let idade = [];
for (let i = 1; i < 4; i++){
	console.log("Insira os dados da",i , "ª pessoa");
	nome[i] = (input("Nome:"));
	idade[i] = parseFloat(input("Idade:"));
}


// Estrutura de decisão
let nomeMaisVelha;
let nomeMaisNova;

if (idade[1] > idade[2] && idade[1] > idade[3]){
	nomeMaisVelha = nome[1];
	if (idade[2] > idade[3]){
		nomeMaisNova = nome[3];
	} else {
		nomeMaisNova = nome[2];
	  }
}

if (idade[2] > idade[1] && idade[2] > idade[3]){
	nomeMaisVelha= nome[2];
	if (idade[1] > idade[3]){
		nomeMaisNova = nome[3];
	} else {
		nomeMaisNova = nome[1];
	  }
}

if (idade[3] > idade[1] && idade[3] > idade[2]){
	nomeMaisVelha = nome[3];
	if (idade[1] > idade[2]){
		nomeMaisNova = nome[2];
	} else {
		nomeMaisNova = nome[1];
	  }
}

// Retorno
console.log("A pessoa mais velha é", nomeMaisVelha,"e", nomeMaisNova, "é a mais nova.");
