<template>
  <div id="app">
    <Footer  v-show='$route.meta.requiresAuth'></Footer>
    <router-view/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
 body {
    background: #f5f5f5;
  }
</style>
