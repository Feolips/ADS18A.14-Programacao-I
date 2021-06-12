// Questão 01: Montar uma aplicação que calcule a soma de dois números quaisquer:

let valorA = 6;
let valorB = 9;

function operacoes(a, b) {
	console.log('Soma............${a} + ${b} = ${a + b}');
	console.log('Subtração.......${a} - ${b} = ${a - b}');
	console.log('Multiplicação...${a} x ${b} = ${a * b}');
	console.log('Divisão.........${a} / ${b} = ${a / b}');
}

// Escrevendo na tela:

console.log('Valores: ${valorA} e ${valorB}');
operacoes(valorA, valorB);
