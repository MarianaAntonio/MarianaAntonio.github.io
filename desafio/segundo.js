function vogalNegrito(str) {
	return str.replace(/[aeiouAEIOU]/g, char => char.bold());
}

function changeHandler() {
	document.querySelector("p").innerHTML = vogalNegrito(
		document.querySelector("input").value
	);
}
