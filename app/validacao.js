function verificaValor(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido</div>
    `;
  }

  if (numeroForaDoIntervalo(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>
    `;
  }

  if(numero === numeroSecreto) {
    document.body. innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número sercreto era ${numeroSecreto}</h3>
    `
  }

}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForaDoIntervalo(numero) {
  return numero > maiorValor || numero < menorValor;
}
