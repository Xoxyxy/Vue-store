import {defineStore} from 'pinia'
import {ref} from 'vue'

import router from '../router'
import auth from '../services/auth'

import {useLoaderStore} from './LoaderStore'

export const useAuthStore = defineStore('authStore', () => {
  const token = ref('')
  const login = ref('')
  const password = ref('')

  const loaderStore = useLoaderStore()

  const signIn = () => {
    loaderStore.loading()
    auth(login.value, password.value)
      .then(res => {
        token.value = res.token
        localStorage.setItem('token', JSON.stringify(res.token))
        login.value = ''
        password.value = ''
        router.push('/')
        loaderStore.loading()
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

  return {login, password, token, signIn, logOut}
})
