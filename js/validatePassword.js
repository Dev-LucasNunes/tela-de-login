export default function validatePassword(input) {
  const password = document.querySelector("[data-password]");
  const passwordConfirmation = document.querySelector(
    "[data-passwordConfirmation]"
  );

  if (password.value != passwordConfirmation.value) {
    input.setCustomValidity("Senhas diferentessss");
  }
}
