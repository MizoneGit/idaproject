import { createStore } from 'vuex'

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) ?? [],
    sortOptions: [
      { value: 'name', name: 'По наименованию' },
      { value: 'min', name: 'По цене min' },
      { value: 'max', name: 'По цене max' }
    ],
    selectedSort: '',
    showAlert: false,
    isSuccess: false
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
    SET_LOCAL_STORAGE_DATA(state) {
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    DELETE_PRODUCT(state, product) {
      state.products = [...state.products].filter(p => p.id !== product.id);
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_SELECTED_SORT(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    SET_SUCCESS(state, status) {
      state.isSuccess = status;
    },
    SET_SHOW_ALERT(state, status = false) {
      state.showAlert = status;
    }
  },
  actions: {
    SHOW_ALERT({ commit }, isSuccess) {
      commit('SET_SUCCESS', isSuccess);
      commit('SET_SHOW_ALERT', true);

      setTimeout(() => {
        commit('SET_SHOW_ALERT');
      }, 1500);
    },
    CREATE_PRODUCT({ commit }, product) {
      product.id = Date.now();
      commit('ADD_PRODUCT', product);
      commit('SET_LOCAL_STORAGE_DATA');
    },
    REMOVE_PRODUCT({ commit }, product) {
      commit('DELETE_PRODUCT', product);
      commit('SET_LOCAL_STORAGE_DATA');
    }
  },
  modules: {
  }
})
