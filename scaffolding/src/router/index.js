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
import register from '../views/register.vue'
import hotel_details from '../views/hotel_details.vue'
import ticket from '../views/ticket.vue'

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
        path: '/remark',
        component: remark
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/ticket',
        component: ticket
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/hotel_details',
        component: hotel_details
    },
]

const router = new VueRouter({
    routes
})

export default router