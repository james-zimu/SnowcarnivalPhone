import Vue from 'vue'
import VueRouter from 'vue-router'
import Trip from '../views/Trip.vue'
import ShopCar from '../views/ShopCar.vue'
import CarRental from '../views/CarRental.vue'
import Hotel from "../views/Hotel.vue"
import test from '../views/test.vue'
import index from '../views/index.vue'
import remark from '../views/Remark.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/carrental',
        component: CarRental
    }, {
        path: '/shopcar',
        component: ShopCar
    }, {
        path: '/test',
        component: test
    },
    {
        path: '/trip',
        component: Trip
    },

    {
        path: "/hotel",
        component: Hotel
    },

    {
        path: '/login',
        component: login
    },
    {
        path: '/remark',
        component: remark
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/test',
        component: test
    }
]

const router = new VueRouter({
    routes
})

export default router