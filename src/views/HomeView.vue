<template>
  <div class="homepage">
    <div class="container">
      <div class="homepage__header">
        <h1 class="homepage__title">Добавление товара</h1>
        <v-select :options="sortOptions" :model-value="selectedSort" @update:model-value="setSelectedSort" class="homepage__select"></v-select>
      </div>
      <div class="homepage__body">
        <product-add-form @create="createProduct" class="homepage__form"/>
        <products-list v-if="sortedProducts.length" :products="sortedProducts" class="homepage__products"/>
        <div v-else class="homepage__empty">Список пуст</div>
      </div>
    </div>
  </div>
</template>

<script>
  import productAddForm from "@/components/ProductAddForm";
  import productsList from "@/components/ProductsList";
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'HomeView',
    components: { productsList, productAddForm },
    methods: {
      ...mapMutations({
        setSelectedSort: 'SET_SELECTED_SORT'
      }),
      ...mapActions({
        createProduct: 'CREATE_PRODUCT'
      }),
    },
    computed: {
      ...mapState({
        products: state => state.products,
        sortOptions: state => state.sortOptions,
        selectedSort: state => state.selectedSort,
      }),
      ...mapGetters({
        sortedProducts: 'SORTED_PRODUCTS',
      })
    },
  }
</script>

<style scoped lang="scss">
  .homepage {
    padding: 32px 0;

    &__header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 8px;
    }

    &__select {
      align-self: flex-end;

      @media screen and (max-width: 740px) {
        width: 100%;
      }
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
      gap: 16px;
      align-items: flex-start;
      width: 100%;

      @media screen and (max-width: 1091px) {
        flex-direction: column;
      }

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
  }
</style>
