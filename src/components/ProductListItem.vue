<template>
  <div class="product">
    <div class="product__image">
      <img :src="formSrcImage(product.url)" alt="Товар">
    </div>
    <h3 class="product__title">{{ product.name }}</h3>
    <p class="product__description">{{ product.description }}</p>
    <div class="product__price">{{ formatPriceRUB(product.price) }}</div>
    <div class="product__buttons">
      <v-button-delete @click="removeProduct"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product-list-item",
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      formSrcImage(url) {
        if (!url) {
          return require('@/assets/images/default.jpg')
        }

        return url.toString();
      },
      formatPriceRUB(price) {
        if (!parseInt(price)) return '';

        return new Intl.NumberFormat('ru-RU').format(price) + ' руб.';
      },
      removeProduct() {
        this.$emit('remove', this.product);
      },
    }
  }
</script>

<style scoped lang="scss">
  .product {
    position: relative;
    display: flex;
    padding-bottom: 16px;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    max-width: 332px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;

    &:hover &__buttons {
      opacity: 1;
    }

    &__title {
      padding: 0 16px;
    }

    &__image {
      display: block;
      height: 200px;
      width: 100%;
      position: relative;
      overflow: hidden;

      & img {
        display: block;
        width: 100%;
      }
      @media screen and (max-width: 1091px) {
        height: unset;
        max-width: unset;
      }
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      color: #3F3F3F;
      flex: 1 1;
      padding: 0 16px;
    }

    &__price {
      font-weight: 600;
      font-size: 24px;
      color: #3F3F3F;
      margin-top: 16px;
      padding: 0 16px;
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