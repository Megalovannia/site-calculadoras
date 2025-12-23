function calcularJuros() {
  const capital = Number(document.getElementById("capital").value);
  const taxa = Number(document.getElementById("taxa").value);
  const tempo = Number(document.getElementById("tempo").value);
  const resultado = document.getElementById("resultado");

  if (!capital || !taxa || !tempo || capital <= 0 || taxa <= 0 || tempo <= 0) {
    resultado.innerText = "Preencha todos os campos com valores válidos.";
    return;
  }

  const juros = capital * (taxa / 100) * tempo;
  const total = capital + juros;

  resultado.innerText =
    `Juros gerados: R$ ${juros.toFixed(2)} | Valor total: R$ ${total.toFixed(2)}`;
}
