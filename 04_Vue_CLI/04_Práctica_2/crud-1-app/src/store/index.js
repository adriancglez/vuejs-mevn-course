import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getTareas(commit) {
      db.collection('tareas').get().then(response => {
        response.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data());
        })
      })
    }
  },
  modules: {
  }
})
