const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
/* 7. Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo.
Continúa pidiendo hasta que ingrese un número positivo. Ejecutar ejercicio en consola
navegador para poder usar prompt. */
let numExercise7;
do{
    numExercise7 = prompt("Ingrese un numero positivo: ")
    numExercise7 !== '' ? numExercise7 = Number(numExercise7) : null
    !isNumber(numExercise7) ? console.log("El sistema solo acepta numeros"):
    numExercise7 <=0 ? console.log("El numero debe ser positivo") : null
}while(!isNumber(numExercise7) || numExercise7<=0)