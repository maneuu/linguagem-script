function carrinhoCompras(q1, q2, q3, q4) {
  const compra = [0, 0, 0, 0]; // subtotal de cada produto
  const preco_unitario = [10, 10, 10, 10]; // preco unitario de cada produto
  const quantidade = [q1, q2, q3, q4];
  for (const index in preco_unitario) {
    if (quantidade[index] > 0) {
      compra[index] += preco_unitario[index] * quantidade[index];
    }
  }
  let resultado = "";
  for (let i = 0; i < 4; i++) {
    resultado += `${i + 1}                 ${compra[i]},00 R$\n`;
  }
  return resultado;
}

export { carrinhoCompras };
