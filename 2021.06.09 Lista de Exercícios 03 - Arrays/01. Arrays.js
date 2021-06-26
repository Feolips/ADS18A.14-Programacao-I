//							ARRAYS
// 01. Ler um array B de 10 elementos que podem ser repetidos.
//     Os elementos únicos de B devem ser gravados no array C.

// Entrada
input = require("prompt-sync")();
let B = [];
let C = [];
let b, c;
// Populando o array;
for (b = 1; b <= 10; b++){
	B[b] = parseInt(input('Insira o ' + b + '° valor: '));
}
// Conferindo valores e agregando apenas os únicos:
for (b = 1; b <= B.length; b++){
	for (c = 1; c <= B.length; c++){
		if (B[b] === B[c]){
			C[c] = B[b];
		}
	}
}
// Retorno
for (c = 1; c <= C.length; c++){
	console.log(C[c]);
}
