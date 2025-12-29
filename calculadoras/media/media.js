function calcularMedia() {
  const entrada = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (!entrada) {
    resultado.innerText = "Digite pelo menos um número.";
    return;
  }

  const valores = entrada
    .split(",")
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  if (valores.length === 0) {
    resultado.innerText = "Digite números válidos separados por vírgula.";
    return;
  }

  const soma = valores.reduce((acc, val) => acc + val, 0);
  const media = soma / valores.length;

  resultado.innerText = `A média é ${media.toFixed(2)}`;
}
