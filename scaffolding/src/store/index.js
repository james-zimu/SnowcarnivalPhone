import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')):{},
      //存储用户当前登陆信息
      uk:"moren"
    },
    mutations: {
        loginOK(state, payload) {
            state.isLogin = 1
            state.user = payload
            // sessionStorage.setItem("token",token);
            // state.token = token
        },
        asc(state, payload){
            state.uk =payload
        }
    },
    actions: {
        // getAdd(context,uk){
        //     context.commit('asc',uk)
        // }
    },
    modules: {}
})