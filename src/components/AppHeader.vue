<template>
  <header v-if="authStore.isAuth" class="header">
    <div class="container header__container">
      <router-link class="header__logo" to="/">Store</router-link>
      <button @click="authStore.logOut" class="header__logout btn-reset">Logout</button>
    </div>
  </header>
</template>

<script>
import {useAuthStore} from '../stores/AuthStore'

export default {
  name: "app-header",
  setup() {
    const authStore = useAuthStore()
    return {authStore}
  }
}
</script>
