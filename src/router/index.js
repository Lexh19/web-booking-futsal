import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/AppRegistration.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/AppHome.vue')
    }
    
  ]
})

export default router
