fetch("https://loteriascaixa-api.herokuapp.com/api/lotomania/latest")
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").innerText =
      `Concurso ${data.concurso} - ${data.data}`;

    document.getElementById("resultado").innerHTML =
      `<strong>Números sorteados:</strong><br>${data.dezenas.join(" - ")}`;
  })
  .catch(() => {
    document.getElementById("status").innerText =
      "Erro ao carregar o resultado da Lotomania.";
  });
