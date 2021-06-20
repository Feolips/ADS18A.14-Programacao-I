// 				ESTRUTURA DE DECISÃO
// 15. Escrever um programa para calcular o valor do discriminante de uma
// equação do segundo grau. Se o discriminante for menor que zero, exibir
// a mensagem “Raízes imaginárias”; caso contrário exibir a mensagem
// “Raízes reais”, seguida dos valores calculados das raízes.

// Entrada de dados
input = require("prompt-sync")();
console.log("Considerando a equação do 2°grau: ax²+bx+c");
let a = parseFloat(input("Insira  a: "));
let b = parseFloat(input("Insira b: "));
let c = parseFloat(input("Insira c: "));
let delta = (b**2) - (4*a*c);

if (delta < 0){
	console.log("As raízes são imaginárias")
}
else {
	console.log("As raízes são reais:");
	let raizPositiva = (-b + Math.sqrt(delta))/(2*a)
	let raizNegativa = (-b - Math.sqrt(delta))/(2*a)
	console.log("Raiz positiva: " + raizPositiva);
	console.log("Raiz negativa: " + raizNegativa);
}
