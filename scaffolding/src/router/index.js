import Vue from 'vue'
import VueRouter from 'vue-router'
import Trip from '../views/Trip.vue'
import ShopCar from '../views/ShopCar.vue'
import CarRental from '../views/CarRental.vue'
import Hotel from "../views/Hotel.vue"
import test from '../views/test.vue'
import HomePage from '../views/Home_page.vue'
import remark from '../views/Remark.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import hotel_details from '../views/hotel_details.vue'
import ticket from '../views/ticket.vue'
import UserPage from '../views/UserPage.vue'
import Community from '../views/Community.vue'
import MapNav from '../views/MapNav.vue'

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
        path: '/home_page',
        component: HomePage
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
    }, {
        path: '/userpage',
        component: UserPage
    }, {
        path: '/community',
        component: Community
    }, {
        path: '/mapnav',
        component: MapNav
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router