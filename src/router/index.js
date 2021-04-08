import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
const Sort = () => import(/* webpackChunkName: "sort" */ '../views/Sort/Sort.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ '../views/Cart/Cart.vue')
const User = () => import(/* webpackChunkName: "user" */ '../views/User/User.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
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
