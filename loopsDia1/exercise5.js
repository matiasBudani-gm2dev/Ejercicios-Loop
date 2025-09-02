const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
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