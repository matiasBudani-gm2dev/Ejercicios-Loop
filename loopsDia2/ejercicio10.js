// 10 Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad titulo y autor. La función debe retornar un nuevo array de strings que describen cada libro en el formato "Título por Autor". Luego, usa .forEach para imprimir cada string en la consola.

function mostrarLibro(libros){
    return libros.map((libro) => libro.titulo + " por " + libro.autor)
}

libros = [
    {
        titulo: "Romeo y Julieta",
        autor: "Shakespare"
    },
    {
        titulo: "Don quijote de la mancha",
        autor: "Cercantes"
    },
    {
        titulo: "Harry Potter y el principe mestizo",
        autor: "J.K.Rowling"
    }
]
mostrarLibro(libros).forEach((libro) => console.log("\n" + libro))
