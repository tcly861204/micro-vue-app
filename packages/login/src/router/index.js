import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
