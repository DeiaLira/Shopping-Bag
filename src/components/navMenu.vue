<template>

    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="menu container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/logo_andreia_lira2.png" alt="Bootstrap" width="45" height="40">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="itens navbar-nav">
            <li class="nav-item">
                <router-link class="routerLink" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="routerLink" to="/shoppingCart">Shopping Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  
  </template>
  
  <script>
  
  export default {
    name: 'navMenu',
    components: {
      
    }
  }
  </script>
  
  <style lang="sass">
  
  nav .menu 
    max-width: 50%
    margin: 0 auto
    .routerLink
        text-decoration: none
        color: #ffffff
        padding: 1rem
  
  </style>