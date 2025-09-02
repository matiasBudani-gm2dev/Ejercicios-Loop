// 9 Escribe una función que reciba un array de números (precios) y devuelva un nuevo array con un 10% de descuento aplicado a cada precio usando .map 
const precios = [200.00, 350.00, 22.34, 100.00]
function descuento(precios){
    return precios.map((precio) => precio * 90 / 100)
}
let preciosConDescuento = descuento(precios)
console.log(preciosConDescuento)