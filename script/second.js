let todos = ["Diego", "Gabriel", "Lucas"];
todos.forEach((word) => {
  let li = document.createElement("li");
  li.innerHTML = word;
  document.querySelector("ul").appendChild(li);
});

document.querySelector("input").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    adicionar();

    console.log(JSON.stringify(sessionStorage));
  }
});

let adicionar = () => {
  let input = document.querySelector("input");
  if (!input.value) return;
  let list = document.querySelector("ul");
  todos.push(input.value);
  input.value = "";
  list.innerHTML = "";
  todos.forEach((word) => {
    let li = document.createElement("li");
    li.innerHTML = word;
    document.querySelector("ul").appendChild(li);
  });
};
