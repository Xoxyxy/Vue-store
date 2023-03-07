import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('loaderStore', () => {
  const isLoading = ref(false)

  const loading = () => {
    isLoading.value = true
  }

  const endLoading = () => {
    isLoading.value = false
  }

  return {loading, endLoading, isLoading}
})
