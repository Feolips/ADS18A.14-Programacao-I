// 				ESTRUTURA SEQUENCIAL
// 02. Calcular a área de um retângulo de lados 'a' e 'b', retornando dados e resultado:

// Apresentando variáveis:
input = require("prompt-sync")();
let ladoA = parseInt(input("Insira um valor: "));
let ladoB = parseInt(input("Insira um valor: "));
// Retornando resultados:
console.log('O retângulo de lados A =', ladoA, 'm e B =', ladoB, 'm tem área de', ladoA * ladoB, 'm²');
