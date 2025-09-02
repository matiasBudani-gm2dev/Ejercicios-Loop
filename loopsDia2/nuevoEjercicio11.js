// Ejercicio 11: Escribe una función que reciba un array de strings (nombres de personas). La función debe retornar un nuevo array de strings en el formato "Hola, soy [nombre]" usando .map.
function saludarNombre(nombres){
    return nombres.map((nombre) => "Hola soy " + nombre)
}
const nombres = ['Matias', 'Diego', 'David', 'Ivan', 'Alex']
const nombresConSaludo = saludarNombre(nombres).forEach((nombre) => console.log(nombre))
