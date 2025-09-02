// 6 Sumar todos los números de un arreglo usando .forEach 
const array = Array.from({ length: 20 }, (_, i) => i+1)
let sum = 0
array.forEach((num) => sum += num)
console.log(sum)