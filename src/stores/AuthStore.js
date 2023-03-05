import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import router from '../router'

export const useAuthStore = defineStore('authStore', () => {
  const isAuth = ref(false)
  const signIn = () => {
    isAuth.value = true
    router.push('/')
  }
  const logOut = () => {
    isAuth.value = false
    router.push('/login')
  }
  const getAuthStatusInLocalStorage = JSON.parse(localStorage.getItem('isAuth'))
  if (getAuthStatusInLocalStorage) {
    isAuth.value = true
  }
  watch(() => isAuth, (state) => {
    localStorage.setItem('isAuth', JSON.stringify(state.value))
  }, {deep: true})

  return {isAuth, signIn, logOut}
})
