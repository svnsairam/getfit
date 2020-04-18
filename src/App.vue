<template>
  <div id="app">
      <NavBar></NavBar>
      <router-view>
      </router-view>  
  </div>
</template>
<script>
import NavBar from './views/NavBar.vue';
import {mapActions} from 'vuex';

export default {
  name: 'App',
  components: { NavBar, },
  methods: {
    // ...mapActions pulls the actions from store.js as local methods into the component
    // mapActions is a helper function imported from vuex
    ...mapActions(['getAuthorizedUsersAction','getCurrentUserAction']),
  },
  async created(){
    // await this.$store.dispatch('getAuthorizedUsersAction');
    // await this.$store.dispatch('getCurrentUserAction');
    // await this.getAuthorizedUsersAction();
    await this.getCurrentUserAction();
  }
};
</script>
<style lang="scss">
@import '@/designstyles/index.scss';
</style>
