const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
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