/* 6. Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola. */
alumno = {
    nombre: "Juan",
    edad: 15,
    dni: 48240359
}

for (const property in alumno) {
  console.log(`${property}: ${alumno[property]}`);
}