// 				ESTRUTURA SEQUENCIAL
// Questão 01: Montar uma aplicação que calcule a soma de dois números quaisquer:

// Para entrada de dados em JavaScript:
/*
sudo npm install prompt-sync
input = require("prompt-sync")();
*/

//Apresentando variáveis:
input = require("prompt-sync")();
let valorA = parseInt(input("Insira um valor: "));
let valorB = parseInt(input("Insira um valor: "));

// Escrevendo na tela:
console.log('A soma de', valorA, 'e', valorB,'é', valorA+valorB);
