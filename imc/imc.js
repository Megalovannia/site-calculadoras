function calcularIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.innerText = "Preencha os campos com valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  resultado.innerText =
    `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
