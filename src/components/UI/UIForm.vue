<template>
  <form class="auth__form form">
    <input type="text" class="form__input input-reset" :placeholder="loginPlaceholder" required>
    <input type="password" class="form__input input-reset" :placeholder="passwordPlaceholder" required>
    <button class="form__btn btn-reset" type="submit">{{ buttonValue }}</button>
  </form>
</template>

<script>
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
  }
}
</script>
