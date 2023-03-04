<template>
  <div class="auth">
    <div class="container auth__container">
      <h1 class="auth__title">Sign in</h1>
      <form class="auth__form">
        <input type="text" class="auth__input input-reset" placeholder="Login" required>
        <input type="password" class="auth__input input-reset" placeholder="Password" required>
        <button class="auth__btn btn-reset" type="submit">Sing In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth"
}
</script>
