<template>
  <div class="wrapper">
    <ui-loader/>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import UiLoader from '@/components/UI/UILoader.vue'

export default {
  components: {AppHeader, UiLoader}
}
</script>
