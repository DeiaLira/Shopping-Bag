<template>
  
  <navMenu />

</template>

<script>
import navMenu from './components/navMenu.vue'

export default {
  name: 'App',
  components: {
    navMenu,
  }
}

</script>


<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
