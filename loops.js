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
let num;
do{
    num = prompt("Ingrese un numero mayor a 250: ")
    num = Number(num)
    isNumber(num) ? num < 250 ? console.log("El numero debe ser mayor a 250") : null : console.log("El sistema solo acepta numeros") 
}while(num <= 250 || !isNumber(num))
saltoLinea()