//forEach -------------------------------------------------------------------------------------------------
const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log (`Eu tenho perfil na rede socioal: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log (`#${indice} Eu tenho perfil na rede socioal: ${nomeDaRedeSocial}`)

})

const alunos = ['Gustavo','Julia','Paula','Wagnes'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome:itemAtual,
        curso: 'Frontend'
    }
   
})

console.log(alunos2)

//map ---------------------------------------------------------------------------------------------------
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map (function(numeroAtual){
    return numeroAtual*2;
})
console.log(dobroDosNumeros)


const paula = alunos2.find(function(item ){
   return item.nome == 'Paula' //true or false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item ){
    return item.nome == 'Paula'//true or false
 })
 
 console.log(indiceDaPaula)

//every --------------------------------------------------------------------------------------

alunos2.push({
    nome:'Lucio',
    curso:'Backend'
 })

 const todosAlunosSaoDeFrontend =  alunos2.every(function(item){
    return item.curso === 'Frontend'
 })


 console.log(todosAlunosSaoDeFrontend)

 //some --------------------------------------------------------------------------------------

 const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso ==='Backend' && item.curso === 'Frontend'
 })

 console.log(existeAlgumAlunoDeBackend)


 
 //filter--------------------------------------------------------------------------------------

 function filtraAlunosDebackend (aluno){
    return aluno.curso === 'Backend';
 }

 //const filtraAlunosDeBackend = aluno  => aluno.curso === 'Backend';   Obs.: Usando arrow
 const alunosDebackend = alunos2.filter(filtraAlunosDebackend)

 console.log(alunosDebackend)

//reduce --------------------------------------------------------------------------------------
 const nums =[10, 20, 30, 10]

 const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador+=itemAtual;
    return acumulador;

 },0)

 console.log(soma);

 //reduce  com nomes ---------------------------------------------------------------------------
 const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador+= `${itemAtual.nome} `;
    return acumulador;

 },'')

 
 console.log(nomesDosAlunos);

//SOMA COM FOR - MANEIRA MAIS TRABALHOSA -------------------------------------------------------
 let somaComFor = 0;

 for (let i = 0; i < nums.length; i++){
    somaComFor += nums[i];
 }

 console.log(somaComFor);