import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        islogin: sessionStorage.getItem('user') ? 1 : 0,
        user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}, //存储当前登录用户的信息
        aaa() {
            sessionStorage.clear();
        },
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