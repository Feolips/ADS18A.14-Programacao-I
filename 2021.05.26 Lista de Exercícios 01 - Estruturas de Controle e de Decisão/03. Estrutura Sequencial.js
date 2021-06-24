// 				ESTRUTURA SEQUENCIAL
// 03. Converter Farenheit para Celsius:

//Apresentando variáveis:
input = require("prompt-sync")();
let farenheit = parseFloat(input("Insira uma temperatura em farenheit: "));
let celsius = (farenheit - 32) / 1.8;
console.log(farenheit, 'ºF', '=', celsius.toPrecision(3), 'ºC');
