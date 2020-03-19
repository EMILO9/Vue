import Vue from 'vue'
import Vuex from 'vuex'
import data from './src/assets/data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Categories: data.Categories,
        Topics: data.Topics,
        Selected: null
    },
    getters: {
        Categories: state => state.Categories,
        Topics: state => state.Topics,
        Selected: state => state.Selected
    },
    mutations: {
        selectMe (state, payload) {
            state.Selected = payload
        }
    }
  })