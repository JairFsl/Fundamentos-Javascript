const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector("[data-message]");
const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Preencha todos os campos!";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerText = `Nome: ${nameValue}
                  Email: ${emailValue}`;

  items.appendChild(li);

  nameValue = "";
  emailValue = "";
});
