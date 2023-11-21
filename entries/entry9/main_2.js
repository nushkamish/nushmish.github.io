
let body = document.body;
let button = document.querySelector(".button");
let buttonTwo = document.querySelector(".button2");

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  buttonTwo.classList.toggle("show");
}


button.addEventListener("click", turnOnLight);