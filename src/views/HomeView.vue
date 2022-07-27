<template>
  <div class="homepage">
    <div class="container">
      <div class="homepage__header">
        <h1 class="homepage__title">Добавление товара</h1>
      </div>
      <div class="homepage__body">
        <product-add-form class="homepage__form"/>
        <products-list :products="products" class="homepage__products"/>
      </div>
    </div>
  </div>
</template>

<script>
  import productAddForm from "@/components/ProductAddForm";
  import productsList from "@/components/ProductsList";
  export default {
    name: 'HomeView',
    components: { productsList, productAddForm },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Продукт 1',
            description: 'Описание продукта 1',
            price: 10000
          },
          {
            id: 2,
            name: 'Продукт 2',
            description: 'Описание продукта 2',
            price: 10000
          },
          {
            id: 3,
            name: 'Продукт 3',
            description: 'Описание продукта 3',
            price: 10000
          },
          {
            id: 4,
            name: 'Продукт 4',
            description: 'Описание продукта 4',
            price: 10000
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .homepage {
    padding: 32px 0;

    &__header {
      margin-bottom: 8px;
    }

    &__form {
      width: 100%;
      max-width: 332px;

      @media screen and (max-width: 1439px) {
        max-width: unset;
      }
    }

    &__body {
      display: flex;
      width: 100%;
      gap: 16px;

      @media screen and (max-width: 740px) {
        justify-content: center;
        flex-wrap: wrap;
      }
    }

    &__products {
      @media screen and (max-width: 740px) {
        justify-content: center;
      }
    }
  }
</style>
