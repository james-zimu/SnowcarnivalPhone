import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import hotel_details from '../views/hotel_details.vue'
import ticket from '../views/ticket.vue'
Vue.use(VueRouter)

const routes = [
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