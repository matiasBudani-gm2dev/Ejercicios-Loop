// 6 Escribe una función que reciba un array de precios y devuelva un nuevo array con un descuento del 10% aplicado a cada precio usando .map. Luego, usa .forEach para imprimir cada precio con su descuento.
function descuento(arrayPrecios){
    return arrayPrecios.map((precio) => precio * 90 / 100)
}

arrayPrecios = [100, 200, 300, 400]
descuento(arrayPrecios).forEach((precio) => console.log(precio))