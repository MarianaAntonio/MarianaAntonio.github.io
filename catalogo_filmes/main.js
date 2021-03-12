const getData = async () => {
	let response = await fetch(
		"https://rafaelescalfoni.github.io/desenv_web/filmes.json"
	);

	let json = await response.json();
	return json;
};

getData().then(data => inicialization(data));

const inicialization = json => {
	json.forEach(film => {
		let div = document.createElement("div");

		let horizontal = document.createElement("div");
		horizontal.className = "horizontal";
		let thumbnail = document.createElement("img");
		thumbnail.className = "thumbnail";
		thumbnail.src = film.figura;
		horizontal.append(thumbnail);

		let info = document.createElement("div");
		info.className = "info";
		let titulo = document.createElement("h2");
		titulo.className = "titulo";
		titulo.innerHTML = film.titulo;
		info.append(titulo);
		let genero = document.createElement("p");
		genero.innerHTML = "<b>Generos:</b> " + film.generos;
		info.append(genero);
		let elenco = document.createElement("p");
		elenco.innerHTML = "<b>Elenco:</b> " + film.elenco;
		info.append(elenco);
		horizontal.append(info);

		let idade = document.createElement("span");
		let idadediv = document.createElement("div");
		idadediv.className = "idadediv";

		idade.className = "idade";
		idade.innerHTML = film.classificacao == 0 ? "L" : film.classificacao;
		idade.style.color = "#fff";
		idadediv.style.backgroundColor =
			film.classificacao == 0
				? "#0e9246"
				: film.classificacao == 10
				? "#117cc0"
				: film.classificacao == 12
				? "#f8c313"
				: film.classificacao == 14
				? "#e67823"
				: film.classificacao == 16
				? "#d72927"
				: "#1c1914";

		idadediv.append(idade);
		horizontal.append(idadediv);

		let n = 0;
		let starrating = 0;
		film.opinioes.forEach(opniao => {
			n++;
			starrating += opniao.rating;
		});
		starrating /= n;
		starrating = Math.round(starrating);

		let rating = document.createElement("div");
		rating.className = "rating";
		let star = document.createElement("img");
		star.src = "star.png";

		for (let i = 1; i <= 5; i++) {
			let currstar = star.cloneNode();
			if (i <= starrating) currstar.className = "fullstar";
			rating.append(currstar);
		}

		horizontal.append(rating);

		div.append(horizontal);

		let descricao = document.createElement("div");
		descricao.className = "descricao";
		descricao.innerHTML = film.resumo;
		div.append(descricao);

		let semelhantes = document.createElement("div");
		semelhantes.className = "semelhantes";
		let semelhantestitle = document.createElement("h3");
		semelhantestitle.innerHTML =
			film.titulosSemelhantes.length != 0 ? "Titulos semelhantes" : "";
		semelhantes.append(semelhantestitle);

		let semelhantesdiv = document.createElement("div");

		film.titulosSemelhantes.forEach(numero => {
			let tinythumb = document.createElement("img");
			tinythumb.src = json[numero - 1].figura;
			semelhantesdiv.append(tinythumb);
		});
		semelhantes.append(semelhantesdiv);
		horizontal.append(semelhantes);

		document.querySelector(".filmes").append(div);
	});
};
