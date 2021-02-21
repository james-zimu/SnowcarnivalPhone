import Vue from 'vue'
import VueRouter from 'vue-router'
import Trip from '../views/Trip.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/test',
        component: test
    },
    {
        path: '/trip',
        component: Trip
    }
]

const router = new VueRouter({
    routes
})

export default router