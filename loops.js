const prompt = require("prompt-sync")()
// functions
function isNumber(variable, integerVerification=false){
    let verificationNumber = !isNaN(variable) && typeof variable === 'number' && variable !== null
    if(verificationNumber && integerVerification){
        return variable % 1 == 0
    }
    return verificationNumber
}

function numBiggerThan(num1, num2){
    return num1>num2
}

function verifyPrimeNumber(num){
    divisores = 0
    for(let i = num; i > 0; i--){
        if (num % i == 0){
            divisores++
        }
    }
    return divisores == 2
}

function saltoLinea(){
    console.log()
}

// 1. Usa el bucle for para mostrar números pares del 2 al 30.
for(let i = 2; i <=20; i+=2){
    console.log(i);
}
saltoLinea()
/* 2. Escribe un bucle que solicite un número mayor que 250. Si el usuario ingresa otro
número debes pedirle que ingrese un valor nuevo El bucle debe pedir un número hasta
que el usuario ingrese un número mayor que 250 o lo cancele Aquí podemos asumir
que el usuario solo ingresará números. */
let numExercise2;
do{
    numExercise2 = prompt("Ingrese un numero mayor a 250(ingrese 0 para terminar): ")
    numExercise2.trim() !== '' ? numExercise2 = Number(numExercise2) : null
    if(numExercise2 === 0){
        break;
    }
    isNumber(numExercise2) ? numExercise2 < 250 ? console.log("El numero debe ser mayor a 250") : null : console.log("El sistema solo acepta numeros") 
}while(numExercise2 <= 250 || !isNumber(numExercise2))
saltoLinea()
/* 3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n > 1 es un primo si no puede ser dividido exactamente por ningún número excepto 1 y n. Por ejemplo, 5 es un
primo, porque no puede ser dividido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7. */
let numExercise3;
do{
    numExercise3 = prompt("Ingrese un numero entero mayor a 1(ingrese 0 para terminar): ")
    numExercise3.trim() !== '' ? numExercise3 = Number(numExercise3) : null
    if(numExercise3 === 0){
        break;
    }
    isNumber(numExercise3, integerVerification=true) ? 
    numBiggerThan(numExercise3, 1) ? null : console.log("El numero debe ser mayor a 1") : 
    console.log("El sistema solo acepta numeros enteros")
}while(!isNumber(numExercise3, integerVerification=true) || !numBiggerThan(numExercise3, 1) )
for(let i=1; i<numExercise3; i++){

}
for(let i = numExercise3; i > 0; i--){
    verifyPrimeNumber(i) ? console.log(i): null
}
saltoLinea()
/* 4. Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se
ingrese un número negativo */
let numExercise4;
do{
    numExercise4 = prompt("Ingrese un numero para calcular su potencia (ingrese uno negativo para terminar el proceso): ")
    numExercise4.trim() !== '' ? numExercise4 = Number(numExercise4) : null
    if(!isNumber(numExercise4)){
        console.log("El sistema solo acepta numeros") 
    }else{
        if(numExercise4 >= 0){
            console.log(Math.pow(numExercise4, 2))
        }
    }
    
}while(!isNumber(numExercise4) || numExercise4 >= 0)
saltoLinea()
/* 5. Pedir un número hasta que se ingrese el número 0 o negativo, luego mostrar la suma de todos los números ingresados */
let sumCounter = 0
let numExercise5;
do{
    numExercise5 = prompt("Ingrese un numero positivo (ingrese 0 o numero negativo cuando haya terminado de ingresar numeros): ")
    numExercise5.trim() !== '' ? numExercise5 = Number(numExercise5) : null
    !isNumber(numExercise5) ? console.log("El sistema solo acepta numeros") :
    numExercise5 > 0 ? sumCounter += numExercise5 : null
    
}while(!isNumber(numExercise5) || numExercise5 > 0)
console.log(sumCounter + " es la suma de todos los numeros ingresados")