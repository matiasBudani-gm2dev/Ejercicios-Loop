const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
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