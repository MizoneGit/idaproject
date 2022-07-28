<template>
  <div class="product">
    <div class="product__image">
      <img :src="formSrcImage(product.src)" alt="Товар">
    </div>
    <div class="product__content">
      <h3 class="product__title">{{ product.name }}</h3>
      <p class="product__description">{{ product.description }}</p>
      <div class="product__price">{{ product.price }} руб.</div>
    </div>
    <div class="product__buttons">
      <v-button-delete @click="deleteProduct(product)"/>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: "ProductElement",
    components: {},

    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations({
        deleteProduct: 'DELETE_PRODUCT'
      }),
      formSrcImage(src) {
        if (!src) {
          return require('@/assets/images/default.jpg')
        }

        return require(src);
      }
    }
  }
</script>

<style scoped lang="scss">
  .product {
    position: relative;
    width: 100%;
    max-width: 332px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;

    &:hover &__buttons {
      opacity: 1;
    }

    &__image {
      display: flex;
      justify-content: center;
      height: 200px;
      width: 100%;
      max-width: 332px;
      position: relative;

      & img {
        width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      padding: 16px;
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      color: #3F3F3F;
    }

    &__price {
      font-weight: 600;
      font-size: 24px;
      color: #3F3F3F;
      margin-top: 16px;
    }

    &__buttons {
      opacity: 0;
      top: -8px;
      right: -8px;
      position: absolute;
      transition: opacity 0.3s linear;
    }
  }


</style>