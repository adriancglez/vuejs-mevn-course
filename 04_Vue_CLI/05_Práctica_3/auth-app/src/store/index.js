import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/firebase";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    usuario: null,
    error: null
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    crearUsuario({commit}, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password).then( response => {
        console.log(response);
        const usuarioCreado = {
          email: response.user.email,
          uid: response.user.uid
        };
        commit('setUsuario', usuarioCreado);
        router.push('/');
      }).catch(err => {
        console.log(err);
        commit('setError', err);
      })
    },
    ingresoUsuario({commit}, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password).then(response => {
        console.log(response);
        const usuarioLogeado = {
          email: response.user.email,
          uid: response.user.uid
        };
        commit('setUsuario', usuarioLogeado);
        router.push('/');
      }).catch(err => {
        console.log(err);
        commit('setError',err);
      })
    },
    cerrarSesion({commit}) {
      auth.signOut().then(() => {
        router.push('/acceso');
      });
    },
    detectarUsuario({commit}, usuario) {
      commit('setUsuario', usuario);
    }
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false;
      } else {
        return true;
      }
    }
  },
  modules: {
  }
});