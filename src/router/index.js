import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    },
    {
      path: '',
      name: '',
      component: () => import('')
    }
  ]
})

export default router
