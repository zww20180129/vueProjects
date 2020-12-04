import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/backTopOne',
    name: 'BackTopOne',
    component: () => import(/* webpackChunkName: "BackTopOne" */ '../views/BackTopOne.vue')
  },
  {
    path: '/backTopTwo',
    name: 'BackTopTwo',
    component: () => import(/* webpackChunkName: "BackTopTwo" */ '../views/BackTopTwo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
