import { Exam } from "./object_exam.js";

const respostasCorretas = { q1: "a", q2: "b", q3: "c", q4: "d", q5: "a" };
const pesos = { q1: 2, q2: 3, q3: 4, q4: 5, q5: 1 };

const provaFinal = new Exam(respostasCorretas, pesos);

provaFinal.add({
  aluno: "Alice",
  valores: { q1: "a", q2: "b", q3: "c", q4: "d", q5: "a" },
});

provaFinal.add({
  aluno: "Bob",
  valores: { q1: "a", q2: "a", q3: "c", q4: "d", q5: "b" },
});

console.log("Média das notas:", provaFinal.avg());
console.log("Maior nota:", provaFinal.max(1));
console.log("Menor nota:", provaFinal.min(1));
console.log("Notas menores que 10:", provaFinal.lt(10));
console.log("Notas maiores que 10:", provaFinal.gt(10));
