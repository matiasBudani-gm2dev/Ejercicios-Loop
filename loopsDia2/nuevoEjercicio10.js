// Ejercicio 10: Escribe una función que reciba un array de números (notas de estudiantes). La función debe retornar un nuevo array de strings que digan "Aprobado" si la nota es mayor o igual a 5, y "Reprobado" en caso contrario, usando .map. 
const notas = [6, 3, 10, 2, 5]
function mostrarAprobados(notas){
    const aprobados = []
    notas.map((notas) => {notas>=5 ? aprobados.push("Aprobado") : aprobados.push("Reprobado")})
    return aprobados
}
aprobados = mostrarAprobados(notas)
console.log(aprobados)