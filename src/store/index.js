import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Продукт 1',
        link: '',
        description: 'Описание продукта 1',
        price: 5000
      },
      {
        id: 2,
        name: 'Продукт 2',
        link: '',
        description: 'Описание продукта 2',
        price: 30000
      },
      {
        id: 3,
        name: 'Продукт 3',
        link: '',
        description: 'Описание продукта 3',
        price: 80000
      },
      {
        id: 4,
        name: 'Продукт 4',
        link: '',
        description: 'Описание продукта 4',
        price: 90000
      }
    ],
    sortOptions: [
      { value: 'name', name: 'По наименованию' },
      { value: 'min', name: 'По цене min' },
      { value: 'max', name: 'По цене max' }
    ],
    selectedSort: '',
  },
  getters: {
    SORTED_PRODUCTS(state) {
      if (state.selectedSort === 'max') {
        return [...state.products].sort((product1, product2) => +product2.price - +product1.price);
      }

      if (state.selectedSort === 'min') {
        return [...state.products].sort((product1, product2) => +product1.price - +product2.price);
      }

      return [...state.products].sort((product1, product2) => product1[state.selectedSort]?.localeCompare(product2[state.selectedSort]))
    },
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    DELETE_PRODUCT(state, product) {
      state.products = [...state.products].filter(p => p.id !== product.id);
    },
    SET_SELECTED_SORT(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {
    CREATE_PRODUCT({ commit }, product) {
      product.id = Date.now();
      commit('ADD_PRODUCT', product);
    }
  },
  modules: {
  }
})
