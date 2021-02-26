import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: [],
    },
    mutations: {
        loginOK(state, payload) {
            state.isLogin = 1
            state.user = payload
        },
    },
    actions: {},
    modules: {}
})