let books = [];

let myrequest = new XMLHttpRequest();

myrequest.open("POST", "https://rafaelescalfoni.net/web/livros.php");

function inserir() {
	let titulo = document.querySelector("#title");
	let descricao = document.querySelector("#description");
	let genero = document.querySelector("#genre");
	let autor = document.querySelector("#author");

	if (!titulo.value || !descricao.value || !genero.value || !autor.value) {
		alert("Preencha todos os campos de dados!");
		return;
	}

	books.push({
		titulo: titulo.value,
		descricao: descricao.value,
		genero: genero.value,
		autor: autor.value,
	});
	drawbooks();
	return false;
}

function drawbooks() {
	let bookdiv = document.querySelector("#catalogo");
	bookdiv.innerHTML = "";
	for (book in books) {
		let div = document.createElement("div");
		let titulo = document.createElement("p");
		let descricao = document.createElement("p");
		let genero = document.createElement("p");
		let autor = document.createElement("p");
		let button = document.createElement("button");
		let lixeira = document.createElement("img");
		let titulodiv = document.createElement("div");
		titulodiv.className = "textodiv";
		let descricaodiv = document.createElement("div");
		let generodiv = document.createElement("div");
		let autordiv = document.createElement("div");
		descricaodiv.className = "textodiv";
		generodiv.className = "textodiv";
		autordiv.className = "textodiv";
		lixeira.src = "./lixeira.png";
		lixeira.className = "lixeiraimg";
		button.appendChild(lixeira);
		button.onclick = deletar;
		button.className = "lixeira";
		titulo.innerHTML = books[book].titulo;
		titulodiv.appendChild(titulo);
		descricaodiv.appendChild(descricao);
		generodiv.appendChild(genero);
		autordiv.appendChild(autor);
		descricao.innerHTML = books[book].descricao;
		genero.innerHTML = books[book].genero;
		autor.innerHTML = books[book].autor;
		div.id = `book${book}`;
		div.appendChild(titulodiv);
		div.appendChild(descricaodiv);
		div.appendChild(generodiv);
		div.appendChild(autordiv);
		div.appendChild(button);
		div.className = "livro";
		bookdiv.appendChild(div);
	}
}

function salvarbd() {
	let result = document.querySelector("#result");
	result.value = JSON.stringify(books);
}

function deletar(event) {
	let id = event.target.parentElement.parentElement.id;
	console.log(id);
	document.querySelector("#" + id).remove();
	books.splice(id.split("k")[1], 1);
	drawbooks();
}
