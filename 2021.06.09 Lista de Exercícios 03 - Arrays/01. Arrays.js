//							ARRAYS
// 01. Ler um array B de 10 elementos que podem ser repetidos.
//     Os elementos únicos de B devem ser gravados no array C.

// Entrada
input = require("prompt-sync")();
let B = [];
// Populando o array;
for (var b = 1; b <= 10; b++){
	B[b] = parseInt(input('Insira o ' + b + '° valor: '));
}
// Função "ignore os itens duplicados" usando o .indexOf
function unicos(valor, indice, proprio){
	return proprio.indexOf(valor) === indice;
}

// Assimilação e Retorno
let C = B.filter(unicos);
console.log('Array C = ' + C + '.');


/*        LIXEIRA
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
*/
