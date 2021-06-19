// 				ESTRUTURA DE DECISÃO
// 11.Leia o saldo médio e calcule o crédito de acordo com a tabela abaixo.
// Mostre uma mensagem informando o saldo médio e o valor do crédito.
// Crédito:
// 0 a 200   - Sem crédito
// 201 a 400 - 20% do Saldo Médio
// 401 a 600 - 30% do Saldo Médio
// 601+      - 40% do Saldo Médio

// Entrada de dados
input = require("prompt-sync")();
let saldo = parseFloat(input("Insira o saldo médio: R$"));
let credit;
// Condicional:
if (saldo >=0 && saldo <= 200){
	credito = saldo * 0.2;
}
else if (saldo > 200 && saldo <= 400){
	credito = saldo * 0.3;
}
else if (saldo > 400 && saldo <= 600){
	credito = saldo * 0.3;
}
else if (saldo > 600){
	credito = saldo * 0.4;
} else {console.log("Saldo Médio inválido.")}
// Retorno:
if (saldo >= 0){
	console.log("Com o saldo médio de R$" + saldo + " é possível obter R$" + credito + " de crédito." )
}

