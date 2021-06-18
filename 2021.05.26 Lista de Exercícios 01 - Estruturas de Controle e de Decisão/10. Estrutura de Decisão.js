// 				ESTRUTURA DE DECISÃO
// 10. Ler custo de fabricação de um carro e comparar com o custo cobrado ao
//     consumidor: (lucro de 28% e 45% de impostos sobre fabricação)

// Entrada de dados
input = require("prompt-sync")();
let custo = parseFloat(input("Insira o custo de fabricação: R$"));

// Impostos:
custo = custo * 1.45;
// Lucro:
custo = custo * 1.28;
// Retorno:
console.log("Custo ao consumidor: R$" + custo) // Testar ".padEnd(2,'0')
