<template>
  <div>
    <section class="hero is-success is-large">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Title</h1>
          <h2 class="subtitle">Subtitle</h2>
          <div v-if="currentLoggedInUser.length==0">
          <button
            class="button is-link is-inverted is-outlined"
            @click="toggleRegisterModal"
          >Join Now</button>
          <div v-if="isModalRegisterOpen" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <Registration @userSaved="toggleRegisterModal()" @cancel="toggleRegisterModal()"></Registration>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="toggleRegisterModal"></button>
          </div>
        </div>
        <div v-if="currentLoggedInUser.length>0">
          <h1>Happy to See you here {{currentLoggedInUser[0].firstName}} {{currentLoggedInUser[0].lastName}}</h1>
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
import {mapState} from 'vuex';
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
      console.log("EVENT EMITTED");
      this.isModalRegisterOpen = !this.isModalRegisterOpen;
    }
  },
 computed: {
    // activities() {
    //   return this.$store.state.activities; 
    // }
    // ...mapState({activities: state => state.activities}),
    ...mapState({currentLoggedInUser: 'currentLoggedInUser'}),
  },
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