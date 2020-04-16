<template>
  <div>
    <section class="hero is-success is-large">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Title</h1>
          <h2 class="subtitle">Subtitle</h2>
          <button
            class="button is-link is-inverted is-outlined"
            @click="toggleRegisterModal"
          >Register Now</button>
          <div v-if="isModalRegisterOpen" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <Registration></Registration>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="toggleRegisterModal"></button>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot"></div>
    </section>
  </div>
</template>

<script>
import Registration from "./Registration.vue";

export default {
  name: "Home",
  components: {
    Registration
  },
  data() {
    return {
      isModalRegisterOpen: false
    };
  },
  methods: {
    toggleRegisterModal() {
      this.isModalRegisterOpen = !this.isModalRegisterOpen;
    }
  }
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