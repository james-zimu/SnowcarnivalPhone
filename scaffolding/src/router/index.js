import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import UserPage from '../views/UserPage.vue'
import Community from '../views/Community.vue'
import MapNav from '../views/MapNav.vue'
import home from '../views/Home_page.vue'
import remark from '../views/Remark.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/remark',
        component: remark
    }, {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    }, {
        path: '/userpage',
        component: UserPage
    }, {
        path: '/community',
        component: Community
    }, {
        path: '/mapnav',
        component: MapNav
    }, {
        path: '/home_page',
        component: home
    }
]

const router = new VueRouter({
    routes
})

export default router