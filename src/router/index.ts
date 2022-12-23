import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Styret from '../views/Styret.vue'
import Arrangement from '../views/Arrangement.vue'
import Samarbeidspartner from '../views/Samarbeidspartner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/styret',
      name: 'styret',
      component: Styret
    },
    {
      path: '/arrangement',
      name: 'arrangement',
      component: Arrangement
    },
    {
      path: '/samarbeidspartner',
      name: 'samarbeidspartner',
      component: Samarbeidspartner
    }
  ]
})

export default router
