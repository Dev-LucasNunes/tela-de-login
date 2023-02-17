import validateName from "./validateName.js";
import validateCpf from "./validateCpf.js";
import validatePassword from "./validatePassword.js";

const formInput = document.querySelectorAll("[required]");
const formFront = document.querySelector("[data-form-front]");
const formBack = document.querySelector("[data-form-back]");

formInput[0].focus();

//Validações
formInput.forEach((input) => {
  input.addEventListener("blur", () => {
    inputVerify(input);
  });
  input.addEventListener("invalid", (evt) => {
    evt.preventDefault();
  });
});

const tiposDeErro = [
  "valueMissing", //não tem nada no campo
  "typeMismatch", //não tá combinando o tipo do elemento com o dado inserido, exemplo é o email que espera um valor@outrovalor
  "patternMismatch", //padrão de regex não bateu
  "tooShort", //muito curto
  "customError", //erros customizados
];

const mensagens = {
  login: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um login válido.",
    tooShort: "Por favor, preencha um login válido.",
  },
  senha: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "senha inválida.",
    tooShort: "senha inválida",
  },
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
  },
  password: {
    valueMissing: "O campo de senha de confirmação não pode estar vazio.",
    tooShort: "O campo de senha não tem caractéres suficientes.",
  },
  passwordConfirmation: {
    valueMissing: "O campo de confirmação não pode estar vazio.",
    tooShort: "O campo de senha não tem caractéres suficientes.",
    customError: "Senhas diferentes",
  },
};

formInput[2].addEventListener("keypress", (evt) => {
  validateName(evt);
});

function inputVerify(input) {
  let mensagem = "";
  input.setCustomValidity("");

  if (input.name == "cpf" && input.value.length >= 11) {
    validateCpf(input);
  }
  if (input.name == "passwordConfirmation" || input.name == "password") {
    validatePassword(input);
  }

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagens[input.name][erro];
    }
  });

  const mensagemErro = input.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = input.checkValidity();

  if (!validadorDeInput) {
    //se for falso ele imprime o texto
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
