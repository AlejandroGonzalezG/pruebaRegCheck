import { createRouter, createWebHistory } from 'vue-router'
import InitialView from './views/InitialView.vue'
import DashboardPage from './components/DashboardPage.vue'
import { useUserStore } from './store/userStore'

const routes = [
  {
    path: '/',
    component: InitialView
  },
  {
    path: '/dashboard',
    component: DashboardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = localStorage.getItem('token')

  if (to.path === '/dashboard' && (!userStore.isAuthenticated || !token)) {
    next('/')
  } else {
    next()
  }
})

export default router
