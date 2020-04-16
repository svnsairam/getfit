<template>
  <div id="app">
      <NavBar></NavBar>
      <Home></Home>  
  </div>
</template>
<script>
import Home from './views/Home.vue';
import NavBar from './views/NavBar.vue';

export default {
  name: 'App',
  components: { Home, NavBar, },
};
</script>
<style lang="scss">
@import '@/designstyles/index.scss';
</style>
