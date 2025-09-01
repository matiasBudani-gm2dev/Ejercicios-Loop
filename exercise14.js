/* 14. Escribe una función llamada arrayContiene que reciba dos parámetros: un array y
un elemento. La función debe comprobar si el elemento existe dentro del array.
Devuelve "true" si está, o "false" si no está. */
function arrayContiene(array, element){
    return array.includes(element)
}

console.log(arrayContiene(["a", "b", "c", "d"], "c"))
console.log(arrayContiene(["a", "b", "c", "d"], "e"))