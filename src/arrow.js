
const minhaFuncao = () => "Diz olá";

const retornaUmCarro = () => (
    {
        modelo:'ka',
        fabricante:'ford'
    }
)
    

console.log(minhaFuncao())
console.log(retornaUmCarro())

//  a arrow vai dar erro, pois depende te quem a chama.
const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)