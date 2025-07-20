import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'
import Layout from '../views/layout/index.vue'
import About from '../views/about/index.vue'
import Introduce from '../views/introduce/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
  ,
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
