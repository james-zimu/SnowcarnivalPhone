import Vue from 'vue'
import VueRouter from 'vue-router'
import Trip from '../views/Trip.vue'
import ShopCar from '../views/ShopCar.vue'
import Hotel from "../views/Hotel.vue"
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/shopcar',
    component: ShopCar
}, {
    path: '/test',
    component: test
},
{
    path: "/hotel",
    component: Hotel
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