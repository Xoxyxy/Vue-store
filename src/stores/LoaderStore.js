import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('loaderStore', () => {
  const isLoading = ref(false)

  const loading = () => {
    isLoading.value = !isLoading.value
  }

  return {loading, isLoading}
})
