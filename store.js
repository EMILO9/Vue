import Vue from 'vue'
import Vuex from 'vuex'
import data from './src/assets/data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Categories: data.Categories,
        Topics: data.Topics
    },
    getters: {
        Categories: state => state.Categories,
        Topics: state => state.Topics
    },
    mutations: {
        updateData (state, payload) {
            state.Categories.map(cat => {
                if (cat.id === payload.id) { cat = payload; console.log(cat) }
            }) 
         }
    }
  })