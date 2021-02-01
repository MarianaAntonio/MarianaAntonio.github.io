let dados = [
	{
		id: 1,
		termo: "W3C",
		definicao:
			"World Wide Web Consortium – escritório responsável por desenvolvernormas técnicas para a Internet",
		autor: "José Borges",
		dataCriacao: "2015-04-01",
	},
	{
		id: 2,
		termo: "HTML",
		definicao:
			"HyperText Markup Language – linguagem de marcação utilizada paraestruturar páginas web",
		autor: "Pedro Silva",
		dataCriacao: "2017-05-12",
	},
	{
		id: 3,
		termo: "CSS",
		definicao:
			"Cascade Style Sheet – Folhas de estilo utilizadas para configurar avisualização de páginas web",
		autor: "Maria Machado",
		dataCriacao: "2018-10-11",
	},
];

const setdescription = (index) => {
	let descricao = document.querySelector("#description");
	descricao.innerHTML = "";
	let texto = document.createElement("p");
	texto.innerHTML = dados[index].definicao;
	descricao.appendChild(texto);
};

for (let dado in dados) {
	let glossario = document.querySelector("#glossario");
	let texto = document.createElement("span");
	texto.innerHTML = dados[dado].termo;
	texto.onclick = () => {
		setdescription(dado);
	};
	glossario.appendChild(texto);
}
