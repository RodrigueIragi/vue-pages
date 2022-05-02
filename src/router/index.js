import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../comp/LogIn'
import Privecy from '../comp/Privecy'
import ArticleDetail from '../comp/ArticleDetail'
import Terms from '../comp/Terms'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article-details',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/privecy',
    name: 'Privecy',
    component: Privecy
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
