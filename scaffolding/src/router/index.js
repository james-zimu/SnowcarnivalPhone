import Vue from 'vue'
import VueRouter from 'vue-router'

import UserPage from '../views/UserPage.vue'
import test from '../views/test.vue'
import Community from '../views/Community.vue'
import MapNav from '../views/MapNav.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/userpage',
    component: UserPage
}, {
    path: '/community',
    component: Community
}, {
    path: '/test',
    component: test
}, {
    path: '/mapnav',
    component: MapNav
}]

const router = new VueRouter({
    routes
})

export default router