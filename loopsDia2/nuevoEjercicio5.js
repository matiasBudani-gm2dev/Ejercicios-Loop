// 5 Mostrar los cuadrados de los números del 1 al 10 usando .map
const array = Array.from({ length: 10 }, (_, i) => i+1)
console.log(array.map((num) => num * num))