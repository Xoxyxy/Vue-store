import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('loaderStore', () => {
  const isLoading = ref(false)

  const loading = () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }

  return {isLoading, loading}
})
