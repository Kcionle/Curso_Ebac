function funcaoMuitoPesa (){
   
}

const funcaoMuitoPesaPromise =  new Promise ((resolve, reject) => {
    try{
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++){
            execucoess++;
        }
        resolve (execucoes);
    } catch(e){
        reject('Deu erro na iteração dos números')
    }
})

const PromiseComParametros = (login, senha) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (`Logado com o usuário: ${login}`)
        }, 3000)
    })
}





async function execucaoPrincipal (){
    console.log ("inicio")
    //await funcaoMuitoPesaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

    PromiseComParametros ('cassiochan.u@gmail.com', 12345).then(resultado => {
        console.log (resultado);
    })
    

    try{
        const resultado = await funcaoMuitoPesaPromise;
        console.log(resultado)

    }catch(e){
        console.log(e)
    }

    console.log ("fim")
}

execucaoPrincipal()