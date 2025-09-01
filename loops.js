const prompt = require("prompt-sync")()
// functions
function isNumber(variable){
    return !isNaN(variable) && typeof variable === 'number' && variable != ''
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
    numExercise2 = prompt("Ingrese un numero mayor a 250: ")
    numExercise2 = Number(numExercise2)
    isNumber(numExercise2) ? numExercise2 < 250 ? console.log("El numero debe ser mayor a 250") : null : console.log("El sistema solo acepta numeros") 
}while(numExercise2 <= 250 || !isNumber(numExercise2))
saltoLinea()
/* 3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n > 1 es un primo si no puede ser dividido exactamente por ningún número excepto 1 y n. Por ejemplo, 5 es un
primo, porque no puede ser dividido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7. */
