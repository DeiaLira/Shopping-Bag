import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    
  },
  getters: {
  },
  mutations: {
    loadProdutos(state, products) {
      state.products = products;
    }
  },
  actions: {

    loadProducts({commit}) {
      axios
      .get('https://fakestoreapi.com/products').
      then(response => {
        commit('loadProdutos',response.data);
      })
    }

  },
  modules: {
  }
})
