// 7 Crea una función que reciba un array de objetos que representan estudiantes, donde cada objeto tiene las propiedades nombre y nota. La función debe retornar un nuevo array de objetos, donde cada objeto tenga las mismas propiedades, pero con una propiedad adicional aprobada que sea true si la nota es mayor o igual a 5, y false en caso contrario. Usa el método .map.

function aprobado(alumnos){
        alumnos.map((alumno) => {
        if(alumno.nota >= 5){
            console.log(alumno.nota)
            alumno.aprobado = true
            console.log(alumno.aprobado)
        }else{
            console.log(alumno.nota)
            alumno.aprobado = false
            console.log(alumno.aprobado)
        }
        return alumno
    })
    return alumnos
}


const alumnos = [
    {
        nombre : "Matias",
        edad: 16,
        nota: 7.32
    },
    {
        nombre : "Juancho",
        edad: 16,
        nota: 4.12
    },
    {
        nombre : "Fercho",
        edad: 17,
        nota: 9.82
    }
]
let curso1 = aprobado(alumnos)
console.log(curso1)