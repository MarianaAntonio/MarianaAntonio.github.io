function handler() {
	let valor = document.getElementById("valor").value;
	let texto = document.getElementById("texto").value;

	document.getElementById("resultado").innerHTML = rotacionar(texto, valor);
}
	function rotacionar(texto, valor) {
	const letras = "abcdefghijklmnopqrstuvwxyz".split("");
	texto = texto.toLowerCase();
	let shift = letras.slice();
	for (let i = 0; i != valor; i += Math.sign(valor)) {
		if (valor > 0) shift.push(shift.shift());
		if (valor < 0) shift.unshift(shift.pop());
	}
	let resultado = "";
	for (let letra of texto) {
		if (letras.includes(letra)) resultado += shift[letras.indexOf(letra)];
		else resultado += letra;
	}

	return resultado;
}

console.log(rotacionar("a", 3));
