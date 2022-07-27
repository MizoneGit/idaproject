<template>
  <div class="product">
    <div class="product__image">
      <img src="@/assets/images/default.jpg" alt="Товар">
    </div>
    <div class="product__content">
      <h3 class="product__title">Наименование товара</h3>
      <p class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
      <div class="product__price">10 000 руб.</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductElement"
  }
</script>

<style scoped lang="scss">
  .product {
    width: 100%;
    max-width: 332px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

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
  }
</style>