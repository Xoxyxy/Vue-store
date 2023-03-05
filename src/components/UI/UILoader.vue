<template>
  <div v-if="loaderStore.isLoading" class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<script>
import {useLoaderStore} from '../../stores/LoaderStore'

export default {
  name: "ui-loader",
  setup() {
    const loaderStore = useLoaderStore()
    return {loaderStore}
  }
}
</script>
