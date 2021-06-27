//									ARRAYS
// 04. Um armazém trabalha com 10 mercadorias diferentes identificadas pelos nú-
//     meros inteiros de 0 a 9. O dono do armazém anota a quantidade de cada mer-
//     cadoria vendida durante o mês. Ele tem uma tabela que indica para cada
//     mercadoria o preço de venda. Escreva um algoritmo que leia a quantidade
//     vendida de cada produto no final do mês, armazenando-os em um array Q, e
//     o preço de venda de cada um (armazenando-os em um array P). Logo após cal-
//     cular e escrever o faturamento mensal do armazém.

// Entrada
input = require("prompt-sync")();
let Q = [];				// Dez categorias de produtos
let qtdeVenda = [];		// Quantidade de itens vendidos por categoria
let valorVenda = [];	// Valor de venda por categoria
let r, s, x;
for (r = 1; r <= 10; r++){
	R[r] = parseInt(input('Insira o ' + r + '° valor de R: '));
}
for (s = 1; s <= 20; r++){
	S[s] = parseInt(input('Insira o ' + s + '° valor de S: '));
}
// Conferindo valores e agregando apenas os únicos:
for (r = 1; r <= R.length; r++){
	for (s = 1; s <= S.length; s++){
		if (R[r] === S[s]){
			X[r] = R[r];
		}
	}
}
// Retorno
for (x = 1; x <= X.length; c++){
	console.log(X[x]);
}
