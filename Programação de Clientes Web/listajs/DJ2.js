
<!doctype html>
<html>
    <head>
    <meta charset="utf8">
     </head>
     <form>
      <button type="button" id="botao">Clique</button>
      </form>
      <script>
      let todos = ["Diego", "Gabriel", "Lucas"];
      todos.forEach((word) => 
{
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

let adicionar = (execute = true) => {
  if (!execute) return;
  let input = document.querySelector("input");
  if (!input.value) return;
  let list = document.querySelector("ul");
  todos.push(input.value);
  document.querySelector(".segundo").value = input.value;
  input.value = "";
  list.innerHTML = "";
  todos.forEach((word) => {
    let li = document.createElement("li");
    li.innerHTML = word;
    document.querySelector("ul").appendChild(li);
  });
};

      </script>
  
     
  </body>

</html>