<template>
  <app-products :products="products"></app-products>
</template>

<script>
import getAllProducts from '../services/getAllProducts'
import {ref, onMounted} from 'vue'
import AppProducts from '../components/AppProducts.vue'

export default {
  name: "home",
  components: {AppProducts},
  setup() {
    let products = ref([])
    onMounted(() => {
      getAllProducts()
        .then(res => products.value = res)
    })

    return {products}
  }
}
</script>
