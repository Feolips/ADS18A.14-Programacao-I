
// 				ESTRUTURA DE DECISÃO
// 09. Ler nome e data de nascimento (DD/MM/AAAA) de uma pessoa e exibir
// nome e idade calculada:

// Entrada de dados
input = require("prompt-sync")();
let nome = input("Insira seu nome: ");
let dataNascimento = [];
let dataAtual = [];

// Captura de data atual:
// A variável 'data' será usada pois a função 'Date' não pode ser alterada:
var data = new Date();
// '.padStart(2,'0')'' é uma função que formata em 2 dígitos
// e preenche vazios com zero:
dataAtual[1] = String(data.getDate()).padStart(2,'0');
dataAtual[2] = String(data.getMonth()).padStart(2,'0');
dataAtual[3] = String(data.getFullYear());
// Mostrando a data de hoje:
console.log("Data de hoje: "+ dataAtual[1] + "/" + dataAtual[2] + "/" + dataAtual[3]);

// Entrada da data de nascimento:
console.log("Informe sua data de nascimento abaixo");
dataNascimento[1] = parseInt(input("Dia (01 - 31): "));
dataNascimento[2] = parseInt(input("Mês (01 - 12): "));
dataNascimento[3] = parseInt(input("Ano (0000): "));

// Calculando a idade:
let diffDia; // Armazena a diferença de dias para acrescer ou não ao mês
let diffMes; // Armazena a diferença de meses para acrescer ou não ao ano
let diffAno; // Armazena a diferença de anos

// Contagem de dias, onde caso seja mês incompleto,
// inicia a contagem de meses com um a mês a menos.
if (dataNascimento[1] >= dataAtual[1]){
	diffDia = dataAtual[1] - dataNascimento[1];
} else {diffMes = -1} 

// Contagem de meses, onde caso seja ano incompleto,
// já inicia a contagem de anos com um a ano a menos.
if (dataNascimento[2] >= dataAtual[2]){
	diffMes = dataAtual[2] - dataNascimento[2];
} else {diffAno = -1}

// Contagem de anos, onde caso seja ano incompleto,
// não acrescenta nenhum ano à contagem.
if (dataNascimento[3] <= dataAtual[3]){
	diffAno = dataAtual[3] - dataNascimento[3];
}

// Erro caso tenha nascido no futuro
if (diffDia < 0 || diffMes < 0 || diffAno < 0){
	console.log(nome + " não pode ter nascido no futuro.")
}

// Retornando a idade, caso esteja no passado:
if (diffDia >= 0 && diffMes >=0 && diffAno >=0){
	console.log(nome +" tem " + diffAno + " anos, " + diffMes + " meses e " + diffDia + " dias.");
} else {console.log("Não foi possível calcular a idade de " + nome + ".")}
