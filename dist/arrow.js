"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'ka',
    fabricante: 'ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());

//  a arrow vai dar erro, pois depende te quem a chama.
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);