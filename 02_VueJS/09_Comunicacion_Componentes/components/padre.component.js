Vue.component('app-padre', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <app-hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></app-hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 157,
            nombrePadre: ''
        }
    }
});