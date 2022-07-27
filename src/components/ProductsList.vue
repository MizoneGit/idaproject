<template>
  <div class="products-list">
    <product-element v-for="product in products" :key="product.id" :product="product" class="products__item" />
  </div>
</template>

<script>
  import productElement from "@/components/ProductElement";
  export default {
    name: "ProductsList",
    components: { productElement },
    props: {
      products: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 332px);
    grid-gap: 16px;
  }
</style>