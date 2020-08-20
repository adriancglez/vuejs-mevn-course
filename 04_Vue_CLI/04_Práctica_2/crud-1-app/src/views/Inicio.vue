<template>
  <div class="home">
    <h1>Inicio</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex';
export default {
  name: 'Inicio',
  created() {
    this.getTareas()
  },
  methods: {
    ...mapActions(['getTareas'])
  }
}
</script>
