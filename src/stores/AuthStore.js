import {defineStore} from 'pinia'
import {ref, watch} from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const isAuth = ref(false)
  const signIn = () => {
    isAuth.value = true
  }
  const authStatusInLocalStorage = localStorage.getItem('isAuth')
  if (authStatusInLocalStorage) {
    isAuth.value = true
  }
  watch(() => isAuth, (state) => {
    localStorage.setItem('isAuth', JSON.stringify(state))
  }, {deep: true})

  return {isAuth, signIn}
})
