const {isNumber} = require('./functions.js')
/* 11. Crea un programa que pida ingresar un número, y muestre su factorial. Este se
calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1.
Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 2. */
let factorial = 1;
let numExercise11;
do{
    numExercise11 = prompt("Ingrese un numero positivo: ")
    numExercise11 !== '' ? numExercise11 = Number(numExercise11) : null
    !isNumber(numExercise11, integerVerification=true) ? console.log("El sistema solo acepta numeros positivos"):
    numExercise11 <=0 ? console.log("El numero debe ser positivo") : null
}while(!isNumber(numExercise11, integerVerification=true) || numExercise11<=0)
for(let i = numExercise11; i > 0; i--){
    factorial *= i
}
console.log(factorial)