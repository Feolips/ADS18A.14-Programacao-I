// Métodos auxiliares
digitar = require("prompt-sync")();	// Para entrada de dados direto no console
//var Data = new Date();
console.clear();					// Para limpar a tela

// Lista de Afazeres
let lista = []		// Armazena a lista 'on-the-fly'
let dataLista = []	// Armazena a data de cada registro da lista

// Cabeçalho e Rodapé
function cabeçalho(){
	console.clear();
	console.log('');
	console.log('LISTA DE AFAZERES'.padStart(31));
	console.log('');
}
function rodapé(){
	console.log('');
	console.log(' A: Adicionar   R: Remover   S: Sair');
	console.log('');
}

// Função Listar Afazeres
function listar(){
	if (lista.length == 0){
	console.log('..lista vazia..'.padStart(30))
} else {
	for (i in lista){
		console.log(' ' + `${parseInt(i)+ 1}` + ': ' + lista[i] + (dataLista[i]).padStart(40))};
	}
}
// Função Adicionar item à lista
function adicione(){
	let adicionado = lista.push(digitar("Adicione o novo item: ").toString());
	// Atribui marca temporal à anotação
	let Data = new Date();
	let Dia = Data.getDate().toString().padStart(2, '0');
	let Mês = Data.getMonth().toString().padStart(2, '0');
	let Ano = Data.getFullYear().toString();
	let Horas = Data.getHours().toString().padStart(2, '0');
	let Minutos = Data.getMinutes().toString().padStart(2, '0');
	let dataAdicionado = dataLista.push(Dia +'/'+ Mês +'/'+ Ano +' '+ Horas +':'+ Minutos);
	console.log('Item adicionado (Z para Desfazer)');
}
// Função Desfazer ultima adição

// Função Remover item da lista
function remova(){
	listar();
	console.log('');1
	let i = parseInt(digitar("Escolha o item a remover: "));
	j = i - 1;
	lista.splice(j,1);
	dataLista.splice(j,1);
	console.log('Item ' + i + ' removido (Z para Desfazer))');
}
// Função Desfazer ultima remoção

// Programa principal
function programa(){
	var menuAtual = 0;
	cabeçalho();
	listar();
	rodapé();
	var opção = digitar('Opção: ').toString().toLowerCase();
	if (opção == 'a'){
		menuAtual = 1;
		cabeçalho();
		adicione();
		programa();	// Voltar ao programa principal
	}
	else if (opção == 'r'){
		menuAtual = 1
		cabeçalho();
		remova();
		programa();	// Voltar ao programa principal
	}
	else if (opção == 's'){
		if (menuAtual > 0){
			programa();
		} else {console.clear(); return}
	} else {programa()}	// Caso opção inválida, retorna ao programa principal
}


// Iniciar o programa principal
programa();
