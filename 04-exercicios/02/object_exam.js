export class Exam {
  constructor(respostas, pesos) {
    this.respostas = respostas; // Respostas corretas (ex: {q1: 'a', q2: 'b', ...})
    this.pesos = pesos; // Pesos das questões (ex: {q1: 2, q2: 3, ...})
    this.provas = []; // Lista de provas dos alunos
  }

  add(prova) {
    let total = 0;
    for (let questao in prova.valores) {
      if (prova.valores[questao] === this.respostas[questao]) {
        total += this.pesos[questao];
      }
    }
    prova.nota = total;
    this.provas.push(prova);
  }

  avg() {
    let soma = 0;
    for (let prova of this.provas) {
      soma += prova.nota;
    }
    return soma / this.provas.length;
  }

  min(quantidade = 1) {
    let notas = this.provas.map((prova) => prova.nota);
    notas.sort((a, b) => a - b);
    return notas.slice(0, quantidade);
  }

  max(quantidade = 1) {
    let notas = this.provas.map((prova) => prova.nota);
    notas.sort((a, b) => b - a);
    return notas.slice(0, quantidade);
  }

  lt(limite) {
    let notas = this.provas.map((prova) => prova.nota);
    return notas.filter((nota) => nota < limite);
  }

  gt(limite) {
    let notas = this.provas.map((prova) => prova.nota);
    return notas.filter((nota) => nota > limite);
  }
}
