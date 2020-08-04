const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        nombre: 'Adrián González',
        edad: 30,
        lenguajes: ['Java', 'JavaScript', ' PHP'],
        tecnologias: [
            {nombre: 'Java', framework: 'Spring', nivel: 3},
            {nombre: 'JavaScript', framework: 'Vue', nivel: 1},
            {nombre: 'JavaScript', framework: 'Angular', nivel: 1},
            {nombre: 'PHP', framework: 'Laravel', nivel: 2},
        ]
    }
});