import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Продукт 1',
        link: '',
        description: 'Описание продукта 1',
        price: 10000
      },
      {
        id: 2,
        name: 'Продукт 2',
        link: '',
        description: 'Описание продукта 2',
        price: 10000
      },
      {
        id: 3,
        name: 'Продукт 3',
        link: '',
        description: 'Описание продукта 3',
        price: 10000
      },
      {
        id: 4,
        name: 'Продукт 4',
        link: '',
        description: 'Описание продукта 4',
        price: 10000
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    DELETE_PRODUCT(state, product) {
      state.products = [...state.products].filter(p => p.id !== product.id);
    }
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
