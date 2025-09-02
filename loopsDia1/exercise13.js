/* 13. Crear una función que reciba dos parámetros(number, length) y devuelva un array
con los múltiplos para ese número y la cantidad recibida por parámetros.
Ejemplo:
- arrayMultiplos(2, 10) debe retornar [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].
- arrayMultiplos(17, 6) debe retornar [17, 34, 51, 68, 85, 102]. */
function arrayMultiplos(number, length){
    const array = []
    for(let i = number; i <= number*length; i+= number){
        array.push(i)
    }
    return array
}
console.log(arrayMultiplos(17, 6))