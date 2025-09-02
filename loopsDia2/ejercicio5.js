// 5 Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad producto y cantidad. La función debe retornar un array de strings que describen cada producto y su cantidad usando .map

function objectDescription(arrayObjetos){
    productsDescriptions = []
    arrayObjetos.map((producto) => 
        productsDescriptions.push(Object.values(producto).toString()))  
    return productsDescriptions  
}

const arrayObjetos = [
    
    Objeto1 = {
        producto1: "Heladera",
        cantidad: 100
    }, 
    Objeto2 = {
        producto1: "Teles",
        cantidad: 20
    },
    Objeto3 = {
        producto1: "Celulares",
        cantidad: 200
    },
    Objeto4 = {
        producto1: "Computadoras",
        cantidad: 50
    }
]
console.log(objectDescription(arrayObjetos))