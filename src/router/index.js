import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import shoppingCart from '../views/shoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
