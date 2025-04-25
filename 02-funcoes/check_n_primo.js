function ePrimo(numero) {
  // true se e primo
  // false se não primo

  for (let n = 2; n < numero; n++) {
    if (numero % n === 0) {
      return false;
    }
  }
  if (numero === 1) {
    return false;
  }
  return true;
}

console.log(ePrimo(1));
console.log(ePrimo(2));
console.log(ePrimo(3));
console.log(ePrimo(4));
console.log(ePrimo(5));
console.log(ePrimo(6));
console.log(ePrimo(7));
