<template>
  <form class="auth__form form">
    <input v-model="authStore.login" type="text" class="form__input input-reset" :placeholder="loginPlaceholder" required>
    <input v-model="authStore.password" type="password" class="form__input input-reset" :placeholder="passwordPlaceholder"
           required>
    <button class="form__btn btn-reset" type="submit">{{ buttonValue }}</button>
  </form>
</template>

<script>
import {useAuthStore} from '../../stores/AuthStore'

export default {
  name: "ui-form",
  props: {
    loginPlaceholder: {
      type: String,
      default: ''
    },
    passwordPlaceholder: {
      type: String,
      default: ''
    },
    buttonValue: {
      type: String,
      required: true
    }
  },
  setup() {
    const authStore = useAuthStore()

    return {authStore}
  }
}
</script>
