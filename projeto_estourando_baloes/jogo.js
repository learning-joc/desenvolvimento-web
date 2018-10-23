// Armazena a chamada da função timeOut
var timerId = null; 

function iniciaJogo() {
	var url = window.location.search;
	var nivel = url.replace("?", "");
	var tSegundos = 0;
	if(nivel == 1) {
		tSegundos = 120;
	} 
	if (nivel == 2) {
		tSegundos = 60;
	}
	if (nivel == 3) {
		tSegundos = 3;
	}
	
	// Inserindo segundos no span
	document.getElementById('tempo_jogo').innerHTML = tSegundos;

	// Quantidade de balões
	var qtdeBaloes = 50;
	criaBaloes(qtdeBaloes);

	// Imprimir quantidade de balões inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtdeBaloes;
	// Imprimir quantidade de balões estourados
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagemTempo(tSegundos + 1);
}


function criaBaloes(qtdeBaloes) {
	for (var i = 1; i <= qtdeBaloes; i++) {
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function() { estourar(this); };

		document.getElementById('cenario').appendChild(balao);
	}
}

function contagemTempo(segundos) {
	segundos = segundos - 1;

	if(segundos == -1) {
		clearTimeout(timerId);
		gameOver();
		return false;
	}

	document.getElementById('tempo_jogo').innerHTML = segundos;
	timerId = setTimeout("contagemTempo("+segundos+")", 1000);
}

function gameOver() {
	document.getElementById('game_over').innerHTML = 'fim de jogo';
}

function estourar(e) {
	var idBalao = e.id;
	document.getElementById(idBalao).src = 'imagens/balao_azul_pequeno_estourado.png';
	pontuacao(-1);
}

function pontuacao() {
	var baloesInteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloesEstourados = document.getElementById('baloes_estourados').innerHTML;

	baloesInteiros = parseInt(baloesInteiros);
	baloesEstourados = parseInt(baloesEstourados);

	baloesInteiros = // Parei aqui

}