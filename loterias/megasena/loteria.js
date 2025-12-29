function carregarResultado() {
  const status = document.getElementById("status");
  const resultado = document.getElementById("resultado");

  status.innerText = "Carregando resultado...";
  resultado.innerHTML = "";

  fetch("https://loteriascaixa-api.herokuapp.com/api/megasena/latest")
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro na resposta da API");
      }
      return res.json();
    })
    .then(data => {
      if (!data || !data.dezenas) {
        throw new Error("Dados inválidos");
      }

      status.innerText = `Concurso ${data.concurso} - ${data.data}`;
      resultado.innerHTML =
        `<strong>Números sorteados:</strong> ${data.dezenas.join(" - ")}`;
    })
    .catch(() => {
      status.innerText = "Não foi possível carregar o resultado agora.";
    });
}

carregarResultado();
