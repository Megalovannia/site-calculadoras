function calcularPorcentagem() {
  const valor = Number(document.getElementById("valor").value);
  const percentual = Number(document.getElementById("percentual").value);
  const resultado = document.getElementById("resultado");

  if (!valor || !percentual || valor <= 0 || percentual <= 0) {
    resultado.innerText = "Preencha os campos com valores válidos.";
    return;
  }

  const calculo = (valor * percentual) / 100;

  resultado.innerText =
    `${percentual}% de ${valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })} é ${calculo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`;
}
