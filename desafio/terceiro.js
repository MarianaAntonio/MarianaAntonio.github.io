function contaPalavras(str) {
	let result = [];
	str.split(" ").forEach(word => {
		if (word == "") return;
		if (result.find(array => array.word == word)) {
			let index = result.findIndex(array => array.word == word);
			result[index].count += 1;
		} else {
			result.push({ word: word, count: 1 });
		}
	});
	return result;
}

function changeHandler() {
	let result = contaPalavras(document.querySelector("input").value);
	let resultstring = "";
	result.forEach(word => {
		resultstring += `<tr><td>${word.word}</td><td>${word.count}</td></tr>`;
	});
	document.querySelector("table").innerHTML =
		"<tr><th>palavra</th><th>vezes</th></tr>" + resultstring;
}
