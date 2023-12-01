//function Pokemon (nomeDoPokemon, tipoDoPokemon){
    //this.nome = nomeDoPokemon;
    //this.tipo = tipoDoPokemon;
//}

//const picacku = new Pokemon ("Picachu","elétrico")

class Pokemon {

    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log (`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque(){
        this.#hp -=10;
    }

    exibeHp(){
        console.log (this.#hp)
    }
}

class Picachu extends Pokemon {
    constructor () {
        super('Picachu','Elétrico')
    }

    atacar(){
        console.log (`${this.nome} atacou com choque do trovão`)
    }

}

const picachuDoAsh = new Picachu ();

picachuDoAsh.recebeuAtaque()
 
console.log(picachuDoAsh.hp)

picachuDoAsh.atacar()
picachuDoAsh.exibeHp()


const picachu = new Pokemon('picachu','elétrico');
//picachu.atacar('choque do trovão')

console.log(picachu);
console.log(picachuDoAsh)

console.log(picachuDoAsh instanceof Picachu);
console.log(picachuDoAsh instanceof Pokemon);