// 9 Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad producto y precio. La función debe retornar un nuevo array de objetos, donde cada objeto tenga una propiedad adicional precioDescuento que sea el precio original con un 10% de descuento. Luego, usa .forEach para imprimir cada producto con su precio original y su precio con descuento.

function aniadirDescuento(listaProductos){
    listaProductos.map((producto) => producto.descuento = producto.precio * 90 / 100)
    return listaProductos
}

const arrayObjetos = [
    
    Objeto1 = {
        producto1: "Heladera",
        precio: 5
    }, 
    Objeto2 = {
        producto1: "Teles",
        precio: 10
    },
    Objeto3 = {
        producto1: "Celulares",
        precio: 10
    },
    Objeto4 = {
        producto1: "Computadoras",
        precio: 5
    }
]

productosConDescuento = aniadirDescuento(arrayObjetos).forEach((producto) => console.log(producto))
console.log(productosConDescuento)