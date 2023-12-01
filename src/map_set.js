let meuMap =  new Map ();
meuMap.set ("nome","gian");
meuMap.set ("stack","html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

//meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let valor of meuMap.values()){
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

//---------------------------------------------------------------------------------------------
const cpfs = new Set ();

cpfs.add('03615163125')
cpfs.add('98987698723')
cpfs.add('98987698783')

console.log(cpfs)
console.log(cpfs.keys());
console.log(cpfs.values());

//----------------------------------------------------------------------------------------------
cpfs.forEach((valor) => {
    console.log(valor);
} )

//-----------------------------------------------------------------------------------------------
const array = ['Cassio', 'Fabio','Ricardo','Sandra','Sandra','Cassio']

const arrayComoSet =  new Set([...array])

const arraySemItemsDuplicados = [...arrayComoSet]

console.log (arrayComoSet)
console.log (arraySemItemsDuplicados)
