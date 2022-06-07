/*Crie um Array "Pessoas"
- Crie uma Promise para inserir as pessoas
- Crie um Callback para listar as pessoas assim que as pessoas forem inseridas
- Crie Um Async e Await para executar
- Depois da quarta pessoa ser inserida no Array  listar as pessoas
*/

let pessoas = [];

function inserirPessoas(nome){

    let promise = new Promise(function(resolve,reject){

        pessoas.push(nome);
        let erro = false;

        if(!erro){
        resolve();
        }
        else{
        reject({msg:"Deu erro"});
        }
    });

    return promise;
}


function listarPessoas(){
    console.log(pessoas);
}

async function executar(){
    await inserirPessoas("José");
          inserirPessoas("Marina");
          inserirPessoas("Nathan");
          inserirPessoas("Nathalia");  
          listarPessoas();
}

executar();