var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito041 = new Array('C', 'D', 'C', 'B', 'C', 'D', 'A', 'D', 'C', 'B', 'A', 'C', 'D', 'C', 'B', 'D', 'B', 'D', 'D', 'B', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D');
var gabarito042 = new Array('A', 'B', 'A', 'B', 'D', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'D', 'B', 'D', 'C', 'D', 'D', 'C', 'A', 'C', 'A', 'B', 'B', 'C', 'A', 'A', 'B', 'A', 'A');
var gabarito043 = new Array('B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C');
var gabarito044 = new Array('B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D');
var gabarito045 = new Array('C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B');

function iniciar() {
	programa = window.prompt("Digite o número do programa: ", "");

	if (programa == "041")
		gabarito = gabarito041;
	else if (programa == "042")
		gabarito = gabarito042;
	else if (programa == "043")
		gabarito = gabarito043;
	else if (programa == "044")
		gabarito = gabarito044;
	else if (programa == "045")
		gabarito = gabarito045;
	else {
		window.alert("Número de Programa Inválido!!!\nDigite entre 041 e 045!!!");
		iniciar();
	}

	pontos = 0;
	num = 1;
	tentativa = 1;

	document.getElementById('visor1').value = programa + "->" + num + ": ";
	document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
	document.getElementById('visor1').value = programa + "->" + num + ":" + resposta;

	if (resposta == gabarito[num-1]) {
		if (tentativa == 1)
			pontos += 3; // pontos = pontos + 3
		else if (tentativa == 2)
			pontos += 2; // pontos = pontos + 2
		else if (tentativa == 3)
			pontos++; // pontos = pontos + 1

		num++;
		tentativa = 1;	

		document.getElementById('visor1').value = programa + "->" + num + ": ";
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
	}
	else {
		tentativa++;
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";

		if (tentativa > 3) {
			num++;
			tentativa = 1;
			document.getElementById('visor1').value = programa + "->" + num + ": ";
			document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
		}
	}
	
	if (num > 30) {
		document.getElementById('visor1').value = "***FIM***";
		document.getElementById('visor2').value = "Pontuação: " + pontos;
	}
}