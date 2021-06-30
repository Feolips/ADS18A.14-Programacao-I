//                                     ARRAYS
// 02. Ler um array R de 10 elementos e outro S de 20 elementos. A seguir gere
//     um array X que contenha uma única ocorrência dos elementos existentes em
//     R *ou* em S (união). Após completar o preenchimento escrever o array X. 
//     Considere que nos arrays R e S podem existir elementos repetidos.

// Entrada
input = require("prompt-sync")();
let R = [];
let S = [];
let X = [];
// Populando o Array
for (var r = 1; r <= 10; r++){
	R[r] = parseInt(input('Insira o ' + r + '° valor de R: '));
}
for (var s = 1; s <= 20; s++){
	S[s] = parseInt(input('Insira o ' + s + '° valor de S: '));
}
// Conferindo valores e agregando apenas os únicos:
for (r = 1; r <= R.length; r++){
	for (s = 1; s <= S.length; s++){
		if (R[r] != S[s]){
			X[r] = R[r];
		}
	}
}
// Retorno
for (var x = 1; x <= X.length; x++){
	console.log(X[x]);
}
