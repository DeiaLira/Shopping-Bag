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

    loadBag(state, products) {
      state.bagProducts = products;
    },

    AddToBag(state, product) {
      state.bagProducts.push(product);
      localStorage.setItem("bagProducts", JSON.stringify(state.bagProducts));
    },

    removeToBag(state, productId) {
      //console.log(alert('Deseja excluir o produto do carrinho?'))
      const updateBag = state.bagProducts.filter(item => productId != item.id);
      state.bagProducts = updateBag;
      localStorage.setItem("bagProducts", JSON.stringify(state.bagProducts));
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

    loadBag({commit}) {
      if(localStorage.getItem("bagProducts")) {
        commit('loadBag', JSON.parse(localStorage.getItem("bagProducts")));
      }
      
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
