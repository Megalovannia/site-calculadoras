function calcularRegraDe3() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;

  if (!a || !b || !c) {
    document.getElementById("resultado").innerText =
      "Preencha todos os valores conhecidos.";
    return;
  }

  const x = (b * c) / a;

  document.getElementById("resultado").innerText =
    `Resultado: X = ${x.toFixed(2)}`;
}
