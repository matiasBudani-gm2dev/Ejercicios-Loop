// 4 Escribe una función que reciba un array de números y cuente cuántos de ellos son mayores a 10 usando el método .forEach.

function mayoresADiez(array){
    contadorMayorADiez = 0
    array.forEach((num) => {
        if(num>10){
            contadorMayorADiez++
        }
    })
    return contadorMayorADiez
}
const array = [2, 3, 6, 21, 12, 11]
console.log("Hay " + mayoresADiez(array) + " numero/s mayores a 10 en el array")