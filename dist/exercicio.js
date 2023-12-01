"use strict";

var alunos = [{
  nome: "Cássio",
  nota: 8
}, {
  nome: "Fabio",
  nota: 5
}, {
  nome: "Ricardo",
  nota: 10
}, {
  nome: "Sandra",
  nota: 7
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);