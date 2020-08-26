<template>
  <div>
    <h1>Editar {{id}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Editar",
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>