// Objetos
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

console.log(mascota);

console.log(mascota.nombre);

mascota.id = 1;

console.log(mascota);

console.log(mascota.nombre);


// Destructuring Objects
const { nombre, vivo, edad } = mascota;

console.log(edad);