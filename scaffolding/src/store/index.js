import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:[],
    },
    mutations: {
        loginOK(state, payload){ 
            state.user = payload
            console.log( state.user)
          },
    },
    actions: {},
    modules: {}
})