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
import {useLoaderStore} from '../stores/LoaderStore'

export default {
  name: "auth",
  components: {UiForm},
  setup() {
    const authStore = useAuthStore()
    const loaderStore = useLoaderStore()
    const signIn = () => {
      loaderStore.loading()
      authStore.signIn()
    }
    return {signIn}
  }
}
</script>
