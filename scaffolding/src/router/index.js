import Vue from 'vue'
import VueRouter from 'vue-router'

import test from '../views/test.vue'
import index from '../views/index.vue'
import remark from '../views/Remark.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path:'/remark',
        component:remark
    },
    {
        path:'/index',
        component:index
    },
    {
    path: '/test',
    component: test
}]

const router = new VueRouter({
    routes
})

export default router