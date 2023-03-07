import {defineStore} from 'pinia'
import {ref} from 'vue'

import router from '../router'
import auth from '../services/auth'

export const useAuthStore = defineStore('authStore', () => {
  const token = ref('')
  const login = ref('')
  const password = ref('')
  const failedAuth = ref(false)

  const signIn = () => {
    auth(login.value, password.value)
      .then(res => {
        try {
          token.value = res.token
          localStorage.setItem('token', JSON.stringify(res.token))
          router.push('/')
        } catch (err) {
          failedAuth.value = true
          setTimeout(() => {
            failedAuth.value = false
          }, 8000)
        } finally {
          login.value = ''
          password.value = ''
        }
      })
  }

  const logOut = () => {
    localStorage.removeItem('token')
    router.push('/login')
    token.value = ''
  }

  const getAuthStatusInLocalStorage = localStorage.getItem('token')
  if (getAuthStatusInLocalStorage) {
    token.value = getAuthStatusInLocalStorage
  }

  return {login, password, token, failedAuth, signIn, logOut}
})
