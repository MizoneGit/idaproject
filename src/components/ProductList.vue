<template>
  <div v-if="products.length" class="products-list">
    <transition-group name="products-list">
      <product-list-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          @remove="removeProduct(product)"
          class="products-list__item"
      />
    </transition-group>
  </div>
  <div v-else class="products-list__empty">Список пуст</div>
</template>

<script>
  import ProductListItem from "@/components/ProductListItem";
  export default {
    name: "product-list",
    components: { ProductListItem },
    props: {
      products: {
        type: Array,
        require: true
      }
    },
    methods: {
      removeProduct(product) {
        this.$emit('remove', product);
      }
    }
  }
</script>

<style scoped lang="scss">
  .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 332px);
    grid-gap: 16px;
    width: 100%;

    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }
    &-enter-from {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-leave-to {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-move {
      transition: transform 0.8s ease;
    }

    &__empty {
      width: 100%;
      padding: 24px;
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      color: #49485E;
    }

    @media screen and (max-width: 1439px) {
      grid-template-columns: repeat(2, 332px);
    }

    @media screen and (max-width: 1091px) {
      display: flex;
      flex-wrap: wrap;

      &__item {
        width: calc(50% - 8px);
        max-width: unset;
      }
    }
    @media screen and (max-width: 640px) {
      &__item {
        width: 100%;
        max-width: unset;
      }
    }
  }
</style>