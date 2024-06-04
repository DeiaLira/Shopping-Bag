import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    bagProducts: []
  },

  getters: {
  },

  mutations: {
    loadProdutos(state, products) {
      state.products = products;
    },

    AddToBag(state, product) {
      state.bagProducts.push(product);

     }
  },

  actions: {

    loadProducts({commit}) {
      axios
      .get('https://fakestoreapi.com/products').
      then(response => {
        commit('loadProdutos',response.data);
      })
    },

    addToBag({commit}, product) {
      commit('AddToBag', product);
    }

  },

  modules: {
  }
  
})
