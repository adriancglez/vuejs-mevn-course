<template>
  <div class="container-images">
    <h1>Galería de fotos</h1>
    <router-link :to="{name:'Image', params: {id: item}}" v-for="(item, i) of images" :key="i">
      <button>Foto {{item}}</button>
    </router-link>
    <Foto />
    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>
<script>
import Foto from "@/components/Image.vue";
export default {
  name: "Images",
  components: {
    Foto,
  },
  data() {
    return {
      images: [1,2,3]
    }
  },
  methods: {
    home() {
      this.$router.push('/');
    },
    anterior() {
      this.$router.go(-1);
    },
    siguiente() {
      this.$router.go(1);
    }
  }
};
</script>