import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    sortOptions: [
      { value: 'name', name: 'По наименованию' },
      { value: 'min', name: 'По цене min' },
      { value: 'max', name: 'По цене max' }
    ],
    selectedSort: '',
    showAlert: false,
    isSuccess: false,
    isProductLoading: true
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
    SET_PRODUCT_DATA_TO_LOCALSTORAGE(state) {
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
    },
    SET_LOADING(state, status) {
      state.isProductLoading = status;
    }
  },
  actions: {
    SHOW_ALERT({ commit }, isSuccess = false) {
      commit('SET_SUCCESS', isSuccess);
      commit('SET_SHOW_ALERT', true);

      setTimeout(() => {
        commit('SET_SHOW_ALERT');
      }, 1500);
    },
    CREATE_PRODUCT({ commit, dispatch }, product) {
      product.id = Date.now();
      try {
        commit('ADD_PRODUCT', product);
        commit('SET_PRODUCT_DATA_TO_LOCALSTORAGE');
        dispatch('SHOW_ALERT', true);
      } catch (e) {
        dispatch('SHOW_ALERT');
      }
    },
    REMOVE_PRODUCT({ commit, dispatch }, product) {
      try {
        commit('DELETE_PRODUCT', product);
        commit('SET_PRODUCT_DATA_TO_LOCALSTORAGE');
        dispatch('SHOW_ALERT', true);
      } catch (e) {
        dispatch('SHOW_ALERT');
      }
    },
    FETCH_PRODUCTS({ commit }) {
      let products = JSON.parse(localStorage.getItem('products')) ?? [];
      commit('SET_PRODUCTS', products);
      setTimeout(() => {
        commit('SET_LOADING', false);
      }, 2000);
    }
  },
  modules: {
  }
})
