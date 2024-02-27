/**
 * 1 - FUncion que calcule el indice de masa corporal, a partir de su altura en metros, 
 * pso en kilos, estos como parametros
 */

alert('Calculadora de IMC');

let pesoInput = parseInt(prompt("Ingrese su peso"));
let alturaInput = parseInt(prompt("Ingrese su altura"));

function calculaImc(peso, altura) {
    let imc;

    imc = peso/(altura * altura);
    return imc;
}

let resultado = calculaImc(pesoInput, alturaInput);
alert(`Su IMC es ${resultado}`);

/**
 * 2 - crea una funcion que calcule el valor del factorial de un numero pasado como parametro
 */

alert('Factorial de un numero');

let numInput = parseInt(prompt("Ingrese el numero para calcular su factorial"));

function factorialNumero(numero) {
    let facto = 1;
    for (let i = 1; i <= numero; i++) {
        facto = facto * i;
        console.log(i);
        console.log(facto);
    }
    return facto;
}

let resFactorial = factorialNumero(numInput);
alert(`El factorial del numero ${numInput} es ${resFactorial}`);