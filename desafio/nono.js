function forcaDaSenha(str) {
	let forca = 0;
	forca += str.search(/[A-Z]/) == -1 ? 0 : 1;
	forca += str.search(/[a-z]/) == -1 ? 0 : 1;
	forca += str.search(/[0-9]/) == -1 ? 0 : 1;
	forca += str.search(/[@#!$%&*,\-+.=]/) == -1 ? 0 : 1;
	return forca;
}

function changeHandler() {
	forca = forcaDaSenha(document.querySelector("input").value);
	for (let i = 1; i <= 4; i++) {
		document.querySelector(`.s${i}`).style.visibility =
			forca >= i ? "visible" : "hidden";
	}
}

forcaDaSenha("");
