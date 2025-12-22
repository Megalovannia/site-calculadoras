function calcularJuros() {
  const capital = document.getElementById("capital").value;
  const taxa = document.getElementById("taxa").value;
  const tempo = document.getElementById("tempo").value;

  if (!capital || !taxa || !tempo) {
    document.getElementById("resultado").innerText = "Preencha todos os campos.";
    return;
  }

  const juros = capital * (taxa / 100) * tempo;
  const total = Number(capital) + juros;

  document.getElementById("resultado").innerText =
    `Juros: R$ ${juros.toFixed(2)} | Total: R$ ${total.toFixed(2)}`;
}
