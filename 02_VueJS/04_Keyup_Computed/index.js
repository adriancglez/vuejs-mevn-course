const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 5},
            {nombre: 'Fresa', cantidad: 0},
            {nombre: 'Melón', cantidad: 3},
            {nombre: 'Naranja', cantidad: 20}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        addFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 1
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (let fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});