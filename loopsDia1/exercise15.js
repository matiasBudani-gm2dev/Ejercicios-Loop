const {isNumber} = require('./functions.js')
/* 15. Escribe una función llamada agregarNumeros que reciba un arreglo de enteros. La
función debe sumar todos los enteros y devolver el valor de la suma. */
function agregarNumeros(array){
    sumCounter = 0
    if(array.every((element) => isNumber(element, integerVerification=true))){
        for(i = 0; i < array.length; i++){
            sumCounter += array[i]
        }return sumCounter
    }
    return "agregarNumeros solo funciona con numeros enteros"
}
console.log(agregarNumeros(["5aksd", 3, 5]))
console.log(agregarNumeros([2, 3, 5]))