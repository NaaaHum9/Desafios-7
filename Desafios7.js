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

/**
 * 3 - funcion para convertir un valor en dolares y devolver la conversion
 */
alert('FUncion convertir dolares');
let numInputConvertir = parseInt(prompt("Ingrese la cantidad de dolares a convertir: "));

function convertirContidad(convertir) {
    let factorConversion = 16;
    let conversion;
    return conversion = convertir * factorConversion;
}

let numConversion = convertirContidad(numInputConvertir);
alert(`La converison de la cantidad ${numInputConvertir} es ${numConversion}`);

/**
 * 4 - Funcion que muestre en pantalla el area y el perimetro de una sola rectangular, utilizar
 * altura, anchura que se proporciona
 */
alert('Area y perimetro de una sala rectangular');

function askTheWidth() {
    let widthRectangle = parseInt(prompt("Enter the triangle width: "));
    return widthRectangle;
}

function askTheLength() {
    let lengthRectangle = parseInt(prompt("Enter the triangle width: "));
    return lengthRectangle;
}

function calculatingPerimeter(Width, Length) {
    let numPerimeter = ((Width + Length)*2);
    return numPerimeter;
}

function calculatingArea(Width, Length) {
    let numArea = (Width * Length);
    return numArea;
}

let numWidth = askTheWidth();
let numLength = askTheLength();
let numPerimeter = calculatingPerimeter(numWidth, numLength);
alert(`The perimeter of the livingroom is: ${numPerimeter}`);
let numArea = calculatingArea(numWidth, numLength);
alert(`The area of the livingroom is: ${numArea}`);

/**
 * 5 - Crea una funcion que muestre en pantalla el area y el perimetro de una sala circular
 * el radio como parametro
 */


/**
 * 6 - Funcion que muestre en pantalla la tabla de multiplicar de un numero dado como parametro
 */