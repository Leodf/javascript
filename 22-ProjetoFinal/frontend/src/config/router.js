import VueRouter from 'vue-router'

import Home from '@/components/home/HomeVue'
import AdminPages from '@/components/admin/AdminPages'

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}] 

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router