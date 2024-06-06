<template>
  <div class="shoppingBagItens">

    <section class="closeOrder">
      <div class="noProductsInCart" v-if="bagProducts.length == 0">
        <h2>Nenhum produto foi adicionado ao carrinho ainda!</h2>
      </div>

      <div class="productCart">
        <div class="card" v-for="(product, index) in bagProducts" :key="index">
          <div class="card-body itensCart">   
            <div class="card-img-container chosenItems">
              <img :src="product.image" class="card-img-top w-100 p-2" alt="product.">
            </div>
            <p class="card-text text-center" :title="product.title"> {{ product.title }} </p>
            <p class="card-text text-center"> R$ {{ product.price.toFixed(2) }} </p>
            <div class="quantity-area text-center">
              <button @click="product.quantity--" :disabled="product.quantity <= 1">-</button>
                <span class="quantity"> {{ product.quantity }} </span>
                <button @click="product.quantity++">+</button>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <section class="summary w-50 p-5 table-warning" v-if="bagProducts.length > 0"> 
      <h3>Resumo do pedido</h3>
      <table class="table table-warning">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>item</th>
            <th>total</th>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
  
</template>

<script>

import { mapState } from 'vuex';

// @ is an alias to /src


export default {

  name: 'shoppingCart',
  components: {
    
  },

  computed: mapState ([
    'bagProducts'
  ]),

  methods: {

  
  }
}

</script>

<style lang="sass">

.noProductsInCart
  height: 36rem
  padding-top: 16%

.closeOrder
  margin-top: 4rem
  margin-bottom: 4rem
  min-height: 40rem
  max-height: 100%
  .productCart
    padding-top: 4rem

.card
  width: 48%
  height: 200px
  overflow: hidden
  margin: 1rem auto
  .itensCart
    display: flex
    justify-content: space-around
    align-items: center
    .card-text
      max-width: 15%
      font-weight: bold

.quantity-area
  button
    margin: 0 .8rem

.chosenItems
  width: 108px
  height: 160px

.summary
  margin: 0 auto
  

</style>