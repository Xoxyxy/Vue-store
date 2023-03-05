<template>
  <div class="auth">
    <div class="container auth__container">
      <h1 class="auth__title">Sign in</h1>
      <ui-form login-placeholder="Login" password-placeholder="Password" button-value="Sign In"/>
    </div>
  </div>
</template>

<script>
import UiForm from '../components/UI/UIForm.vue'

export default {
  name: "auth",
  components: {UiForm}
}
</script>
