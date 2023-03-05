<template>
  <div class="auth">
    <div class="container auth__container">
      <h1 class="auth__title">Sign in</h1>
      <ui-form @submit.prevent="signIn"
               login-placeholder="Login"
               password-placeholder="Password"
               button-value="Sign In"/>
    </div>
  </div>
</template>

<script>
import UiForm from '../components/UI/UIForm.vue'
import {useAuthStore} from '../stores/AuthStore'
import router from "../router";

export default {
  name: "auth",
  components: {UiForm},
  setup() {
    const authStore = useAuthStore()
    const signIn = () => {
      authStore.signIn()
      router.push('/')
    }
    return {signIn}
  }
}
</script>
