import Vue from 'vue'
import Router from 'vue-router'
import Breeds from '@/views/Breeds.vue'
import Home from '@/views/Home.vue'
import Subbreeds from '@/views/Subbreeds'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Breeds',
            name: 'Breeds',
            component: Breeds
        },
        {
            path: '/Subbreeds',
            name: 'Subbreeds',
            component: Subbreeds
        }
    ]
})
