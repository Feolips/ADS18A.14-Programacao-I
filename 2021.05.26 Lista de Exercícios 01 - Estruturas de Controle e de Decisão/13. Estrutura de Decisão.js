// 				ESTRUTURA DE DECISÃO
// 13. Verificar se três números inteiros correspondem aos lados de um
// triângulo, onde um lado deve ser menor que a soma dos comprimentos
// dos outros dois.

// Entrada de dados
input = require("prompt-sync")();
let lado = [];
for (i = 1; i < 4; i++){
	lado[i] = parseFloat(input("Insira o " + i + "º lado: "))
}

// Ordenando do maior para o menor:
let ladoOrdenado = [];
if (lado[1] > lado[2] && lado[1] > lado[3]){
	ladoOrdenado[1] = lado[1];
	if (lado[2] >= lado[3]){
		ladoOrdenado[2] = lado[2];
		ladoOrdenado[3] = lado[3];
	} else {
		ladoOrdenado[2] = lado[3];
		ladoOrdenado[3] = lado[2];
	  }
}

else if (lado[2] > lado[1] && lado[2] > lado[3]){
	ladoOrdenado[1] = lado[2];
	if (lado[1] > lado[3]){
		ladoOrdenado[2] = lado[1];
		ladoOrdenado[3] = lado[3];
	} else {
		ladoOrdenado[2] = lado[3];
		ladoOrdenado[3] = lado[1];
	  }
}

else if (lado[3] > lado[1] && lado[3] > lado[2]){
	ladoOrdenado[1] = lado[3];
	if (lado[1] > lado[2]){
		ladoOrdenado[2] = lado[1];
		ladoOrdenado[3] = lado[2];
	} else {
		ladoOrdenado[2] = lado[2];
		ladoOrdenado[3] = lado[1];
	  }
}
// Caso todos sejam iguais:
else{
	for (i = 1; i < 4; i++){
		ladoOrdenado[i] = lado[i];
	}
}

// Testando se a soma dos lados menores superam o maior
// e retornando o resultado:

if (ladoOrdenado[1] < (ladoOrdenado[2] + ladoOrdenado[3])){
	console.log("Os vetores " + lado[1] + ", " + lado[2] + " e " + lado[3] + " formam um triângulo.");
} else {console.log("Os vetores " + lado[1] + ", " + lado[2] + " e " + lado[3] + " não formam um triângulo.");}
