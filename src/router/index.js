import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Sort = () => import(/* webpackChunkName: "home" */ '../views/Sort.vue')
const Cart = () => import(/* webpackChunkName: "home" */ '../views/Cart.vue')
const User = () => import(/* webpackChunkName: "home" */ '../views/User.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
