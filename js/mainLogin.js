import validateName from "./validateName.js";
import validateCpf from "./validateCpf.js";

const formInput = document.querySelectorAll("[required]");
const formFront = document.querySelector("[data-form-front]");
const formBack = document.querySelector("[data-form-back]");

formInput[0].focus();

formInput.forEach((input) => {
  input.addEventListener("blur", () => {
    inputVerify(input);
  });
});

formInput[2].addEventListener("keypress", (evt) => {
  validateName(evt);
});

function inputVerify(input) {
  if (input.name == "cpf" && input.value.length >= 11) {
    validateCpf(input);
  }
}
