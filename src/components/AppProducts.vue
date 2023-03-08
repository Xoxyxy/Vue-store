<template>
  <section class="card">
    <div class="container">
      <ul class="card__list list-reset">
        <li v-for="product in products" :key="product.id" class="card__item">
          <div class="card__content">
            <img :src="product.image" class="card__img" :alt="product.title">
            <div class="card__bottom">
              <div class="card__title">{{ product.title }}</div>
              <div class="card__price">${{ product.price }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "app-products",
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
