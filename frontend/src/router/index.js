import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const {cookies}= useCookies()
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
    component: () => import( '../views/dashboardView.vue'),
      beforeEnter() {
      if (!cookies.get('human')) {
        router.push({ name: 'login' })
      }
    },
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
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/registerView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/loginView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/profileView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router