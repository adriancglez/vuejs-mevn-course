<template>
  <div class="home">
    <h1>Inicio</h1>
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}
        <router-link :to="{name: 'Editar', params: {id: tarea.id}}">
          <button>Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Inicio',
  created() {
    this.getTareas()
  },
  methods: {
    ...mapActions(['getTareas'])
  },
  computed: {
    ...mapState(['tareas'])
  }
}
</script>
