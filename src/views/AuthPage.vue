<template>
  <div class="auth">
    <div class="container auth__container">
      <h1 class="auth__title">Sign in</h1>
      <div v-if="authStore.failedAuth" class="auth__failed">
        User is not defined. Try - Login: <span>mor_2314</span> Password: <span>83r5^_</span>
      </div>
      <ui-form @submit.prevent="authStore.signIn"
               login-placeholder="Login"
               password-placeholder="Password"
               button-value="Sign In"/>
    </div>
  </div>
</template>

<script>
import UiForm from '../components/UI/UIForm.vue'
import {useAuthStore} from '../stores/AuthStore'

export default {
  name: "auth",
  components: {UiForm},
  setup() {
    const authStore = useAuthStore()

    return {authStore}
  }
}
</script>
