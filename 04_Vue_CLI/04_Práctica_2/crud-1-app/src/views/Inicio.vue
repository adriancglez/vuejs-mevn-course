<template>
  <div class="home">
    <h1>Lista de Tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(tarea, index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}
        <div class="float-right">
          <router-link :to="{name: 'Editar', params: {id: tarea.id}}" class="btn btn-warning btn-sm mr-2">
            <button class="btn btn-warning btn-sm">Editar</button>
          </router-link>
          <button @click="eliminarTarea(tarea.id)" class="btn btn-danger -btn-sm">Eliminar</button>
        </div>
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
    ...mapActions(['getTareas', 'eliminarTarea'])
  },
  computed: {
    ...mapState(['tareas'])
  }
}
</script>
