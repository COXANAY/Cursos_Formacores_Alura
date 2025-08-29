/* Exerc 001
console.log('Bem vindo ao exerc 001!');
*/

/*Exerc 002 e 003
var userName = prompt('Digite o seu nome: ');
console.log('Olá, ' + userName);
alert('Olá, ' + userName);
*/

/*Exerc 004
var linguagemFav = prompt('Qual linguagem de programação você mais gosta? ');
alert(`A linguagem de programação que você mais gosta é: ${linguagemFav}`);
console.log(`A linguagem de programação que você mais gosta é: ${linguagemFav}`);
*/

/*Exerc 005
let valor01 = prompt('Digite um valor: ');
let valor02 = prompt('Digite outro valor: ');

let numero01 = parseInt(valor01);
let numero02 = parseInt(valor02);

let soma = numero01 + numero02;
let resultado = console.log(`A soma de ${valor01} e ${valor02} é igual a ${soma}`);
let resultadoAlert = alert(`A soma de ${valor01} e ${valor02} é igual a ${soma}`);
*/

/*Exerc 006
let valor01 = prompt('Digite um valor: ');
let valor02 = prompt('Digite outro valor: ');

let numero01 = parseInt(valor01);
let numero02 = parseInt(valor02);

let subtracao = numero01 - numero02;
let resultado = console.log(`A Subtração de ${valor01} e ${valor02} é igual a ${subtracao}`);
let resultadoAlert = alert(`A Subtração de ${valor01} e ${valor02} é igual a ${subtracao}`);
*/

/*Exerc 007
var idade = prompt('DIgite sua idade: ');

converteIdade = parseInt(idade);

if(converteIdade >= 18){
    alert('Parabéns você é maior de idade!!');
    console.log('Parabéns você é maior de idade!!');
}else{
    alert('Parabéns você é menor de idade!!');
    console.log('Parabéns você é menor de idade!!');
}
*/

/*Exerc 008
let numeroUser = prompt('Digite um numero para verificar se é negativo ou não: ');

numero = parseInt(numeroUser);

if (numero < 0){
    console.log(`O seu numero ${numero} é nagativo`);
    alert(`O seu numero ${numero} é nagativo`);
}else if(numero > 0){
    console.log(`O seu numero ${numero} é positivo`);
    alert(`O seu numero ${numero} é positivo`);
} else{
    console.log(`O seu numero ${numero} é Zero`);
    alert(`O seu numero ${numero} é Zero`);
}
*/

/*Exerc 009
var inputUser = prompt('Digite um numero para contalo de até 100');
console.log(`O seu número escolhido foi ${inputUser}`);

var i = parseInt(inputUser);

while(i < 100){
    i++
    console.log(i);
}
*/

/*Exerc 010
alert('Calculadora de media');
let notaAluno01 = prompt('Digite a sua nota primeira nota: ');
let notaAluno02 = prompt('Digite a sua nota segunda nota: ');
let notaAluno03 = prompt('Digite a sua nota terceira nota: ');
let notaAluno04 = prompt('Digite a sua nota quarta nota: ');

var nota01 = parseFloat(notaAluno01);
var nota02 = parseFloat(notaAluno02);
var nota03 = parseFloat(notaAluno03);
var nota04 = parseFloat(notaAluno04);

var mediaNota = (nota01 + nota02 + nota03 + nota04) / 4;

if (mediaNota >= 8){
    console.log(`Parabéns sua média foi ${mediaNota} você passou de ano!!!`);
    alert(`Parabéns sua média foi ${mediaNota} você passou de ano!!!`);
}else{
    console.log(`Sua média foi ${mediaNota} você reprovou :(`);
    alert(`Sua média foi ${mediaNota} você reprovou :(`);
}
*/

/*Exerc 011
var numeroAleatorio = Math.random();
console.log(`O número aleatorio foi ${numeroAleatorio}`);
alert(`O número aleatorio foi ${numeroAleatorio}`);
*/

/*Exerc 012
var numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(`O número aleatorio foi ${numeroAleatorio}`);
alert(`O número aleatorio foi ${numeroAleatorio}`);
*/

/*Exerc 013
var numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(`O número aleatorio foi ${numeroAleatorio}`);
alert(`O número aleatorio foi ${numeroAleatorio}`);
*/