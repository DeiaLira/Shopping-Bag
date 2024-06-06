<template>
  <section class="featuredProducts">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/destaques/books.jpg" class="d-block w-40" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Books</h5>
            <p>Best sellers around the world</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/destaques/closet.jpg" class="d-block w-40" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Closet</h5>
            <p>Fashion trends in 2024</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/destaques/travel.jpg" class="d-block w-40" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fast Travel</h5>
            <p>Controlling the amount of luggage</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section class="mainProducts">
    <div class="brands">
      <img src="../assets/img/Empresa1.png" alt="">
      <img src="../assets/img/Empresa2.png" alt="">
      <img src="../assets/img/Empresa3.png" alt="">
      <img src="../assets/img/Empresa4.png" alt="">
    </div>

    <h1>Products List</h1>

    <div class="products">
      <div class="card" v-for="(product, index) in products" :key="index" :class="{inBag : isInBag(product)}">
        <div class="card-img-container">
          <img :src="product.image" class="card-img-top w-100 p-2" alt="product.">
        </div>
        <div class="card-body">
          <p class="card-text text-center" :title="product.title"> {{ product.title.substring(0,18) }} ... </p>
          <p class="text-center"> R$ {{ product.price.toFixed(2) }} </p>
          <div class="quantity-area text-center ">
            <button v-if="!isInBag(product)" @click="addToBag(product)" type="button" class="btn btn-primary">Add to Bag</button>
            <button v-if="isInBag(product)" type="button" class="btn btn-danger" @click="removeToBag(product.id)">Remove from bag</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex';

// @ is an alias to /src


export default {

  name: 'homePage',
  components: {
    
  },

  computed: mapState ([
    'products', 'bagProducts'
  ]),

  methods: {
    addToBag(product) {
      product.quantity = 1;
      this.$store.dispatch('addToBag', product);
    },

    isInBag(product) {
      return this.bagProducts.find(item => item.id == product.id);
    },

    removeToBag(productId) {
      if (confirm('Deseja retirar o produto do carrinho?')) {
        this.$store.dispatch('removeToBag', productId);
      }

    },

  }
}
</script>

<style lang="sass">

#app
  background-color: #C2C8DA

//-----Carrossel Style-----//

.featuredProducts
  padding-top: 4rem 
  max-width: 55%
  margin: 2rem auto

.carousel-item
  img
    margin: 0 auto
    border-radius: 1rem
  .carousel-caption
    background-color: rgba(194,200,218,0.8) 
    color: #000000
    font-weight: bold

//-----End Carrossel Style-----//
//-----Main Products Style-----// 

.mainProducts
  h1
    margin: 3rem 0
  .brands
    display: flex
    justify-content: space-around
    background-color: #E6C744
    img
      max-width: 6rem
      margin: 2rem auto
      border-radius: 50%
  
.products
  .inBag
    border: 1px solid blue
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
  max-width: 80%
  margin: 0 auto
  .card
    max-width: 16%
    margin: 2rem 1%
    .card-img-container
      width: 100%
      height: 300px // Define a altura fixa desejada para as imagens
      overflow: hidden
      img
        width: 80%
        height: 100%
        object-fit: cover
        object-position: center
    .removeToBag
      margin: 1rem 0
    button
      margin: 1rem 0

     

</style>
