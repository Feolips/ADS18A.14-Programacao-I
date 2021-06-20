// 				ESTRUTURA DE DECISÃO
// 14. A partir da questão anterior, caso as medidas correspondam aos lados
// de um triângulo informar o tipo desse triângulo, considerando que:
// a) Triângulo Equilátero – possui os três lados iguais;
// b) Triângulo Isósceles – possui dois lados iguais e um diferente;
// c) Triângulo Escaleno – possui três lados com medidas diferentes.

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
// e indicando qual o tipo de triângulo detectado:
let ladosMenores = ladoOrdenado[2] + ladoOrdenado[3];
if (ladoOrdenado[1] < ladosMenores){
	console.log("Os vetores " + lado[1] + ", " + lado[2] + " e " + lado[3] + " formam um triângulo.");
	if (lado[1] == lado[2] && lado[1] == lado[3]){
		console.log("O triângulo formado é do tipo equilátero.");
	} else if ((lado[1] == lado[2] || lado[1] == lado[3] || lado[2] == lado[3]) && lado[1] != lado[2] || lado[1] != lado[3]){
		console.log("O triângulo formado é do tipo isóceles.");
	} else {console.log("O triângulo formado é do tipo escaleno.");}
	
} else {console.log("Os vetores " + lado[1] + ", " + lado[2] + " e " + lado[3] + " não formam um triângulo.");}




