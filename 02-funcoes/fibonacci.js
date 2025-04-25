function fibonacci(n) {
  let resultado = [];
  let array_fibo = [0, 1];
  for (let i = 0; i < n; i++) {
    array_fibo.push(
      array_fibo[array_fibo.length - 2] + array_fibo[array_fibo.length - 1]
    );
    resultado.push(array_fibo[i]);
  }
  return resultado;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(6));
