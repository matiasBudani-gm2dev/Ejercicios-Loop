const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
/* 3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n > 1 es un primo si no puede ser dividido exactamente por ningún número excepto 1 y n. Por ejemplo, 5 es un
primo, porque no puede ser dividido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7. */

function verifyPrimeNumber(num){
    divisores = 0
    for(let i = num; i > 0; i--){
        if (num % i == 0){
            divisores++
        }
    }
    return divisores == 2
}

let numExercise3;
do{
    numExercise3 = prompt("Ingrese un numero entero mayor a 1(ingrese 0 para terminar): ")
    numExercise3.trim() !== '' ? numExercise3 = Number(numExercise3) : null
    if(numExercise3 === 0){
        break;
    }
    isNumber(numExercise3, integerVerification=true) ? 
    numExercise3 > 1 ? null : console.log("El numero debe ser mayor a 1") : 
    console.log("El sistema solo acepta numeros enteros")
}while(!isNumber(numExercise3, integerVerification=true) || numExercise3 <= 1)
for(let i=1; i<numExercise3; i++){

}
for(let i = numExercise3; i > 0; i--){
    verifyPrimeNumber(i) ? console.log(i): null
}
