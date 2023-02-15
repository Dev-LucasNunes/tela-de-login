export default function validateCpf(input) {
  const cpf = input.value.replace(/\.|-/g, "");
  console.log(cpf);
  if (
    validateRepeatNumbers(cpf) ||
    validateFirstDigit(cpf) ||
    validateSecondDigit(cpf)
  ) {
    input.setCustomValidity("cpf INVÁLIDO");
  }
}

function validateRepeatNumbers(cpf) {
  const repeatNumbers = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return repeatNumbers.includes(cpf);
}

function validateFirstDigit(cpf) {
  let sum = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    sum += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[9];
}

function validateSecondDigit(cpf) {
  let sum = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    sum += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[10];
}
