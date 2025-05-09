function sumValues(vetor) {
  return vetor.reduce((soma, valor) => soma + valor, 0);
}

function sumOdds(vetor) {
  return vetor
    .filter((valor) => valor % 2 !== 0)
    .reduce((soma, valor) => soma + valor, 0);
}

function product(vetor) {
  return vetor.reduce((produto, valor) => produto * valor, 1);
}

let valores = [1, 2, 3];

console.log("Soma:", sumValues(valores));
console.log("Soma dos ímpares:", sumOdds(valores));
console.log("Produtório:", product(valores));
