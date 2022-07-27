<template>
  <div class="homepage">
    <div class="container">
      <div class="homepage__header">
        <h1 class="homepage__title">Добавление товара</h1>
      </div>
      <product-add-form class="homepage__form"/>
      <product-element />
    </div>
  </div>
</template>

<script>
  import productAddForm from "@/components/ProductAddForm";
  import productElement from "@/components/ProductElement";
  export default {
    name: 'HomeView',
    components: { productAddForm, productElement},
  }
</script>

<style scoped lang="scss">
  .homepage {
    padding: 32px;

    &__header {
      margin-bottom: 8px;
    }

    &__form {
      max-width: 332px;
    }
  }
</style>
