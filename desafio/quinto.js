function substitute(str, find, replace) {
	return str.replace(new RegExp(find, "g"), replace);
}

function changeHandler() {
	let inputs = document.querySelectorAll("input");
	if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "")
		return;
	document.querySelector("p").innerHTML = substitute(
		inputs[0].value,
		inputs[1].value,
		inputs[2].value
	);
}
