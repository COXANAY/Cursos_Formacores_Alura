//Exerc 001
function calculadoraIMC(){
    let peso = prompt('Digite seu peso: ');
    let altura = prompt('Digite a sua altura em metros usando ponto "Ex 1.75": ');

    let pesoConvert = parseFloat(peso);
    let alturaConvert = parseFloat(altura);

    let resultadoImc = pesoConvert / Math.pow(alturaConvert,2);
    resultadoImc = Math.round(resultadoImc * 100) / 100;
    
    if(resultadoImc < 18.5){
        alert(`O seu IMC é ${resultadoImc}, voçê está a baixo do peso.`);
    }else if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
        alert(`O seu IMC é ${resultadoImc}, voçê está com peso considerado normal/saudável.`);
    }else if(resultadoImc >= 25 && resultadoImc <= 29.9){
        alert(`O seu IMC é ${resultadoImc}, voçê está com sobrepeso, atenção à saúde.`);
    }else if(resultadoImc >= 30 && resultadoImc <= 39.9){
        alert(`O seu IMC é ${resultadoImc}, voçê está com obesidade, risco aumentado de doenças.`);
    } else if(resultadoImc >= 40){
        alert(`O seu IMC é ${resultadoImc}, voçê está com obesidade grave, alto risco de problemas de saúde.`);
    }
}

//Exerc 002
function numeroFatorial(){
    let inputNumero = prompt('Digite um numero: ');
    let numConvert = parseInt(inputNumero);

    let fatorialCalc = 1;

    for(let i = 1; i <= numConvert; i++){
        fatorialCalc *= i;
        console.log(fatorialCalc);
    }

    alert(`O fatorial do seu numeor é ${fatorialCalc}`);
    
}

//Exerc 003
function convertReal(){
    let valorDolarInput = prompt('Digite um valor em  para converter Dólar($) para Real(R$) cotação de $1 = R$4,80: ');

    let tipoDolar = parseFloat(valorDolarInput);
    let calculoConversao = tipoDolar * 4.80;

    alert(`O valor em Dólar que você digitou $${valorDolarInput} convertido para Real ficou: R$${calculoConversao}`);

}

//Exerc 004
function valoresPerimetro(){
    let baseUser = prompt('Digite o numero da base do seu retangulo: ');  
    let alturaUser = prompt('Digite o numero da altura do seu retangulo: ');

    calculaPerimetro(baseUser, alturaUser);
}

function calculaPerimetro(base, altura){
    let baseInput = base //prompt('Digite o numero da base do seu retangulo: ');  
    let alturaInput = altura //prompt('Digite o numero da altura do seu retangulo: ');

    let convertBase = parseInt(baseInput);
    let convertAltura = parseInt(alturaInput);

    let perimetroRetangulo = 2 * (convertAltura + convertBase);

    alert(`O perimetro do seu retangulo é ${perimetroRetangulo}`);
}

//Exerc 005
function valoresPerimetroCirculo(){
    let diametroUser = parseInt(prompt('Digite o dimaetro do seu circulo: '));

    calcularPerimetroCirculo(diametroUser);
}

function calcularPerimetroCirculo(diametro){
    let diametroValue = diametro
    let pi = 3.1416;

    let calculoRaio = diametroValue / 2;
    let calculoPerimetroCirculo = (2 * pi) * calculoRaio;
    
    alert(`O perímetro(Circunferência) do seu círculo é: ${calculoPerimetroCirculo}`);
}

//Exerc 006

function tabuadaInput(){
    let inputNumeroTabuada = parseInt(prompt('Digite um numero para saber a sua tabuada: '));

    tabuada(inputNumeroTabuada);
}

function tabuada(numeroTabuada){
    let numeroCalc = numeroTabuada;
    alert(`A tabuada de ${numeroCalc} ira aparecer no console (F12 > console). `);
    console.log(`A tuabada de ${numeroCalc} é: `);
    for (i = 1; i <= 10; i++){
        let resultado = numeroCalc * i;
        console.log(`${numeroCalc} x ${i} = ${resultado}`);   
    }
}