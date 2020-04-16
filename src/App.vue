<template>
  <div id="app">
      <NavBar></NavBar>
      <router-view>
      </router-view>  
  </div>
</template>
<script>
import NavBar from './views/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar, },
};
</script>
<style lang="scss">
@import '@/designstyles/index.scss';
</style>
