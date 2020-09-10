import Vue from 'vue';
import VueRouter from 'vue-router';
import Registro from "@/views/Registro";
import Inicio from "@/views/Inicio";
import Acceso from "@/views/Acceso";
import { auth } from "@/firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/acceso',
    name: 'Acceso',
    component: Acceso
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;
    console.log("usuario desde router: ", usuario);

    if (!usuario) {
      next({path: '/acceso'});
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;