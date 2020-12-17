function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let newSquare = () => {
  let square = document.createElement("div");
  square.style.width = "100px";
  square.style.backgroundColor = "red";
  square.style.height = "100px";
  square.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = getRandomColor();
  });
  document.querySelector(".sgrid").appendChild(square);
};
