import Vue from 'vue'
import Router from 'vue-router'
import Breeds from '@/views/Breeds.vue'
import Home from '@/views/Home.vue'
import SubBreeds from '@/views/SubBreeds'

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
      path: '/SubBreeds',
      name: 'SubBreeds',
      component: SubBreeds
    }
  ]
})
