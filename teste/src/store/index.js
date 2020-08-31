import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const BASE_URL = `https://catalogo.automatuslab.com/api/Catalogo/DisponibilidadeMovel`

const state = {
  planos: [], 
  loading: false
}

const actions = {

  carregaPlanos({ commit }, obj) {
    commit('setLoading', true);

    axios.post(BASE_URL, obj)
      .then((response) => {
        let plano = response.data.portfolio.controle;
        commit('ADD_PLANO', plano);
        commit('setLoading', false);

      })
      .catch((error) => {
        console.log(error)
      })

  }
}

const mutations = {
  ADD_PLANO(state, playload) {
    state.planos = playload
  },

  setLoading(state, payload) {
    state.loading = payload
  }
}

export default new Vuex.Store({ state, actions, mutations })

