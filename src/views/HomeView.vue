<template>
  <v-alert/>
  <div class="homepage">
    <div class="container">
      <div class="homepage__header">
        <h1 class="homepage__title">Добавление товара</h1>
        <v-select
            :options="sortOptions"
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            class="homepage__select"
        />
      </div>
      <div class="homepage__body">
        <product-add-form @create="createProduct" class="homepage__form"/>
        <product-list
            v-if="!isProductLoading"
            :products="sortedProducts"
            @remove="removeProduct"
            class="homepage__products"
        />
        <v-loader class="homepage__loader" v-else></v-loader>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductAddForm from "@/components/ProductAddForm";
  import ProductList from "@/components/ProductList";
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'HomeView',
    components: { ProductList, ProductAddForm },
    computed: {
      ...mapState({
        products: state => state.products,
        sortOptions: state => state.sortOptions,
        selectedSort: state => state.selectedSort,
        isProductLoading: state => state.isProductLoading
      }),
      ...mapGetters({
        sortedProducts: 'SORTED_PRODUCTS',
      })
    },
    methods: {
      ...mapMutations({
        setSelectedSort: 'SET_SELECTED_SORT',
      }),
      ...mapActions({
        showAlert: 'SHOW_ALERT',
        createProduct: 'CREATE_PRODUCT',
        removeProduct: 'REMOVE_PRODUCT',
        fetchProducts: 'FETCH_PRODUCTS'
      })
    },
    mounted() {
      this.fetchProducts();
    }
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
    &__loader {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      align-items: center;
    }
  }
</style>
