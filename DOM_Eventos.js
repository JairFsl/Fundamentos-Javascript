// EVENTOS

const button = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailinput = document.querySelector("#email");

const itens = document.querySelector(".items");
const body = document.querySelector("body");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailinput.value;

  if (nameValue === "" || emailValue === "") {
    return alert("Por favor preencha os campos!");
  }

  itens.firstElementChild.textContent = nameValue;
  itens.children[1].textContent = emailValue;

  // myForm.style.background = "yellow";

  body.style.background = "lightblue";
});
