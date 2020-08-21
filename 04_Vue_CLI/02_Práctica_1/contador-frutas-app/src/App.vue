<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <lista></lista>
  </div>
</template>

<script>
import Cabecera from "@/components/Cabecera";
import Lista from "@/components/Lista";

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

<style>

</style>
