import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //存储用户当前登陆信息
        uk: "moren",
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
                // sessionStorage.setItem("token",token);
                // state.token = token
        },
        asc(state, payload) {
            state.uk = payload
        }
    },
    actions: {
        // getAdd(context,uk){
        //     context.commit('asc',uk)
        // }
    },
    modules: {}
})