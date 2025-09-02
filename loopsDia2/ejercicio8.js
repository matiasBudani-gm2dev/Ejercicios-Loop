// 8 Escribe una función que reciba un array de objetos que representan estudiantes, donde cada objeto tiene las propiedades nombre y nota. La función debe calcular y retornar el promedio de las notas usando el método .forEach.

function promedioCurso(curso){
    let sumNotas = 0;
    curso.forEach((alumno) => sumNotas += alumno.nota)
    return sumNotas / curso.length
}

const alumnos = [
    {
        nombre: "ManuelitoCrack2007",
        nota: 10
    },
    {
        nombre: "Julian",
        nota: 1
    },
    {
        nombre: "Mini pekka",
        nota: 7
    }
]
curso1 = promedioCurso(alumnos)
console.log(curso1)