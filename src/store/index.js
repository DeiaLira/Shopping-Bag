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
    },

    removeToBag(state, productId) {
      //console.log(alert('Deseja excluir o produto do carrinho?'))
      const updateBag = state.bagProducts.filter(item => productId != item.id);
      state.bagProducts = updateBag;
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
    },

    removeToBag({commit}, productId) {
      commit('removeToBag', productId);
    }

  },

  modules: {
  }

})
