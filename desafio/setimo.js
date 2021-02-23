let meses = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

function extenso(str) {
	let strarr = str.split("/");
	if (
		strarr[0] == undefined ||
		strarr[1] == undefined ||
		strarr[2] == undefined
	)
		return "";
	return `${strarr[0]} de ${meses[parseInt(strarr[1], 10) - 1]} de ${
		strarr[2]
	}`;
}

function changeHandler() {
	document.querySelector("p").innerHTML = extenso(
		document.querySelector("input").value
	);
}
