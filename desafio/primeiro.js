function reverte(str) {
	return str.split("").reverse().join("");
}
function changeHandler() {
	document.querySelector("p").innerHTML = reverte(
		document.querySelector("input").value
	);
}
changeHandler();
