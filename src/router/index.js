import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'

import auth from '../views/AuthPage.vue'
import home from '../views/HomePage.vue'

import {useAuthStore} from '../stores/AuthStore'

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  {
    path: '/login',
    component: auth,
    name: 'login'
  },
  {
    path: '/:CatchAll(.*)',
    component: home,
    redirect: '/',
    name: '404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.name !== 'login') {
    if (!token) {
      return next({
        name: 'login'
      })
    }
  }
  if (to.name === 'login' && token) {
    return next({
      name: 'home'
    })
  }
  next()
})

export default router
