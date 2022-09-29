import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/home/HomeVue'
import AdminPages from '../components/admin/AdminPage'

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPage',
    path: '/admin',
    component: AdminPages
}] 

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router