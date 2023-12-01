"use strict";

//forEach -------------------------------------------------------------------------------------------------
var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede socioal: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede socioal: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagnes'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

//map ---------------------------------------------------------------------------------------------------
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true or false
});

console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //true or false
});

console.log(indiceDaPaula);

//every --------------------------------------------------------------------------------------

alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);

//some --------------------------------------------------------------------------------------

var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

//filter--------------------------------------------------------------------------------------

function filtraAlunosDebackend(aluno) {
  return aluno.curso === 'Backend';
}

//const filtraAlunosDeBackend = aluno  => aluno.curso === 'Backend';   Obs.: Usando arrow
var alunosDebackend = alunos2.filter(filtraAlunosDebackend);
console.log(alunosDebackend);

//reduce --------------------------------------------------------------------------------------
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

//reduce  com nomes ---------------------------------------------------------------------------
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

//SOMA COM FOR - MANEIRA MAIS TRABALHOSA -------------------------------------------------------
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);