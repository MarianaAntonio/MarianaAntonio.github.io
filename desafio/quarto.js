function contaPalavras(str) {
	let result = [];
	str.split(" ").forEach(word => {
		if (result.find(array => array.word == word)) {
			let index = result.findIndex(array => array.word == word);
			result[index].count += 1;
		} else {
			result.push({ word: word, count: 1 });
		}
	});
	return result;
}

function maiorOcorrencia(str) {
	let maior = { count: 0 };
	let contado = contaPalavras(str);
	contado.forEach(objeto => {
		if (objeto.count > maior.count) {
			maior = objeto;
		}
	});
	return maior;
}
function changeHandler() {
	let result = maiorOcorrencia(document.querySelector("input").value);
	document.querySelector(
		"p"
	).innerHTML = `A palavra com maior ocorrencia é ${result.word}, ela aparece ${result.count} vezes`;
}
