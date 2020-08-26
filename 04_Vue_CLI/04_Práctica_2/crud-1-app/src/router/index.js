import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Editar from "@/views/Editar";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/editar/:id',
      name: 'Editar',
      component: Editar
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
