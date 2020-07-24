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

// Practicando Objetos
const web = {
    nombre: 'andromeda',
    links: {
        enlace: 'www.andromeda.com'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/andromexico',
            nombre: 'andromeda yt'
        },
        facebook: {
            enlace: 'facebook.com/andromexico',
            nombre: 'andromeda fb'
        }
    }
}

// Si se desea acceder a la propiedad enlace del objeto Youtube dentro del objeto web
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

// De la forma con destructuring objects
const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);