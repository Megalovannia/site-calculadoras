function calcularIMC() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  if (!peso || !altura) {
    document.getElementById("resultado").innerText = "Preencha todos os campos.";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);
  document.getElementById("resultado").innerText = `Seu IMC é ${imc}`;
}
