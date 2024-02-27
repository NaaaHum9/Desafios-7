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