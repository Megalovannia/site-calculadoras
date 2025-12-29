function calcularMediaPonderada() {
  const valoresInput = document.getElementById("valores").value;
  const pesosInput = document.getElementById("pesos").value;
  const resultado = document.getElementById("resultado");

  if (!valoresInput || !pesosInput) {
    resultado.innerText = "Preencha valores e pesos.";
    return;
  }

  const valores = valoresInput.split(",").map(v => parseFloat(v.trim()));
  const pesos = pesosInput.split(",").map(p => parseFloat(p.trim()));

  if (valores.length !== pesos.length) {
    resultado.innerText = "A quantidade de valores e pesos deve ser igual.";
    return;
  }

  let somaPonderada = 0;
  let somaPesos = 0;

  for (let i = 0; i < valores.length; i++) {
    if (isNaN(valores[i]) || isNaN(pesos[i])) {
      resultado.innerText = "Use apenas números válidos.";
      return;
    }

    somaPonderada += valores[i] * pesos[i];
    somaPesos += pesos[i];
  }

  const media = somaPonderada / somaPesos;
  resultado.innerText = `A média ponderada é ${media.toFixed(2)}`;
}
