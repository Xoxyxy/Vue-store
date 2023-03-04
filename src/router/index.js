import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'

import auth from '../views/AuthPage.vue'
import home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/login',
    component: auth
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
