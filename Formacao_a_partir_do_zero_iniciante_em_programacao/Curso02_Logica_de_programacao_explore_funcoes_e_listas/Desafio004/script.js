//Exerc 001
function listaVazia(){
    let listaGenerica = [];
    console.log(listaGenerica);
    alert(listaGenerica);
}

//Exerc 002
let linguagensDeProgramacao = ['JavaScript','C','C++','Python'];

function arrayLinguagensProgramacao(linguagem){
    linguagensDeProgramacao.push(linguagem);
    console.log(linguagensDeProgramacao);
    alert(linguagensDeProgramacao);
}
//Exerc 003
function receberLinguagem(){
    let inputLinguagem = prompt('Digite uma linguagem de programação que você queira adicionar na Lista de lingugagens: ');
    arrayLinguagensProgramacao(inputLinguagem);
    alert(`A linguagem ${inputLinguagem} foi adicionada`);
}

//Exerc 004
function chamarNome(){
    let nomes = ['Juscilene', 'Joao', 'Anna'];
    console.log(nomes[0]);
}
//Exerc 005
function chamarNome1(){
    let nomes = ['Juscilene', 'Joao', 'Anna'];
    console.log(nomes[1]);
}
//Exerc 006
function chamarNome2(){
    let nomes = ['Juscilene', 'Joao', 'Anna'];
    console.log(nomes[2]);
}