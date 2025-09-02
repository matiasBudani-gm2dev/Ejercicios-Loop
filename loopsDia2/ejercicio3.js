// 3 Escribe una función que reciba un array de números y devuelva el promedio de todos los elementos usando el método .forEach.
function promedioArray(array){
    let promedio = 0
    array.forEach((numero) => promedio +=(numero / array.length))
    
    return promedio
}

console.log(promedioArray([2, 5, 7, 5, 1, 2, 4, 2]))