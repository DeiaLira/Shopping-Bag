<template>
  <div class="shoppingBagItens">

    <section class="closeOrder">
      <div class="noProductsInCart" v-if="bagProducts.length == 0">
        <h2>Nenhum produto foi adicionado ao carrinho ainda!</h2>
      </div>

      <div class="productCart">
        <div class="card" v-for="(product, index) in bagProducts" :key="index">
          <div type="button" class="removeBag" @click="this.$store.dispatch('removeToBag', product.id)">Remove from bag</div>
          <div class="card-body itensCart">   
            <div class="card-img-container chosenItems">
              <img :src="product.image" class="card-img-top w-100 p-2" alt="product.">
            </div>
            <p class="card-text text-center" :title="product.title"> {{ product.title }} </p>
            <div class="quantity-area text-center">
              <button @click="product.quantity--" :disabled="product.quantity <= 1">-</button>
              <span class="quantity"> {{ product.quantity }} </span>
              <button @click="product.quantity++">+</button>
            </div>
            <p class="card-text text-center"> R$ {{ (product.price * product.quantity).toFixed(2) }} </p>
          </div>
        </div>
        <div class="totalPrice" v-if="bagProducts.length > 0">
          <h2>Gran Total: {{ totalPrice() }}</h2>
        </div>
      </div>
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
    totalPrice() {
      let totalPrice = 0;

      this.bagProducts.forEach(item => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice.toFixed(2);
    }
  
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
  .removeBag
    position: absolute
    max-width: 24%
    margin-left: 80%
    padding: 1rem
    text-decoration: underline
    font-size: 14px
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
  
.totalPrice
  max-width: 50%
  margin: 0 auto

</style>