import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fav',
    name: 'fav',
    component: () => import( '../views/FavView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contactView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import( '../views/portfolioView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/dashboardView.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: () => import( '../views/singleView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/adminView.vue')
  },
  {
    path: '/editPortfolio',
    name: 'editPortfolio',
    component: () => import( '../views/editPortfolioView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router