<template>
  <div>
 <section class="hero is-success is-large">

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
      <button class="button is-link is-inverted is-outlined">
       <router-link to="/registration">Register</router-link>
      </button>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
 
  </div>
</section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.hero-body { 
   background-image: url("http://orig14.deviantart.net/7584/f/2015/181/2/7/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg");
   background-position: center center; 
   background-repeat: no-repeat; 
   background-attachment: fixed; 
   background-size: cover; 
   background-color: #999; 
   }
</style>