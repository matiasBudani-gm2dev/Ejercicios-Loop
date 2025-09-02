// 7 Mostrar los elementos de un arreglo con su posición (índice) usando .forEach
const array = Array.from({ length: 20 }, (_, i) => i+1)
array.forEach((numero, indice) => console.log(("numero:" + numero + " indice:" + indice + "\n")))