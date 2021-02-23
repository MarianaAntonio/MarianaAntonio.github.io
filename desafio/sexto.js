function diasDeVida(dia, mes, ano) {
	let nascimento = new Date(ano, mes, dia);
	let hoje = new Date();
	return Math.floor(
		(hoje.getTime() - nascimento.getTime()) / (24 * 60 * 60 * 1000)
	);
}
function changeHandler() {
	let inputs = document.querySelectorAll("input");
	if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "")
		return;
	let dia = inputs[0].value;
	let mes = inputs[1].value;
	let ano = inputs[2].value;
	document.querySelector("p").innerHTML =
		diasDeVida(dia, mes, ano) + " dias desde seu nascimento!";
}
