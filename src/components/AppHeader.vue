<template>
  <header v-if="authStore.isAuth" class="header">
    <div class="container header__container">
      <router-link class="header__logo" to="/">Store</router-link>
      <button @click="logOut" class="header__logout btn-reset">Logout</button>
    </div>
  </header>
</template>

<script>
import {useAuthStore} from '../stores/AuthStore'
import {useLoaderStore} from '../stores/LoaderStore'

export default {
  name: "app-header",
  setup() {
    const authStore = useAuthStore()
    const loaderStore = useLoaderStore()
    const logOut = () => {
      loaderStore.loading()
      authStore.logOut()
    }
    return {authStore, logOut}
  }
}
</script>
