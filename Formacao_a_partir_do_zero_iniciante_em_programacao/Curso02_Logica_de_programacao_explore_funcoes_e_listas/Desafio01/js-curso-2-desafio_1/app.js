let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clickConsole(){
    console.log('O botão console foi clicado');
}

function clickAlert(){
    alert('Eu amo JS');
}

function clickPrompt(){
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clickSoma(){
    let num01 = prompt('Digite um numero: ');
    let num02 = prompt('Digite outro numero: ');

    let numero01 = parseInt(num01);
    let numero02 = parseInt(num02);

    var soma = numero01 + numero02;

    alert(`A soma dos numeros ${numero01} + ${numero02} = ${soma}`);
}