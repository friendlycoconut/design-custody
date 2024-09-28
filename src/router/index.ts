import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Homepage.vue'

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // Lazy-loaded route
    component: () => import('../pages/About.vue'),
  },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
