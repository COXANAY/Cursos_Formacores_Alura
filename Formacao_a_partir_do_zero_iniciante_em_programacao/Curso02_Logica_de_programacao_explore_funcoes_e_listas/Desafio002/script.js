//Exerc 001
function helloWorld(){
    console.log('Olá mundo!');
}

//Exerc 002
function saudacao(){
    let nome = prompt('Digite o seu nome: ');
    console.log(`Olá ${nome}!`);
}

//Exerc 003
function dobraNumero(){
    let numerUser = prompt('Digite um numero: ');
    let numero = parseInt(numerUser);

    let dobrarNumero = numero * 2;

    console.log(`O dobro de ${numerUser} é ${dobrarNumero}`);
}

//Exerc 004
 function mediaNumeros(){
    let numerUser01 = prompt('Digite o primeiro numero: ');
    let numerUser02 = prompt('Digite o segundo numero: ');
    let numerUser03 = prompt('Digite o terceiro: ');

    let numero01 = parseInt(numerUser01);
    let numero02 = parseInt(numerUser02);
    let numero03 = parseInt(numerUser03);

    let media = (numero01 + numero02 + numero03) / 3;

    console.log(`A media dos números ${numerUser01}, ${numerUser02} e ${numerUser03} é ${media}`);
}

//Exerc 005
function numeroMaior(){
    let num01 = prompt('Digite um numero: ');
    let num02 = prompt('Digitre outro numero: ');

    let numConvert01 = parseInt(num01);
    let numConvert02 = parseInt(num02);

    if(numConvert01 > numConvert02){
        console.log(`O maior número é ${num01}`);
    }else{
        console.log(`O maior número é ${num02}`);
    }
 
}

// Exerc 006
function numeroPorSi(numerototal) {
    if (isNaN(numerototal)) {
        console.log('Por favor, digite um número válido.');
    } else {
        console.log(`${numerototal} * ${numerototal} = ${numerototal * numerototal}`);
    }
}

function executaNumeroPorSi() {
    let numero = parseInt(prompt('Digite um número:'));
    numeroPorSi(numero);
}
