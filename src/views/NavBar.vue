<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/home">Home</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/activities">Activities</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/about">About</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/contact">Contact</router-link>
        </a>
        
          <a v-if="currentLoggedInUser.length>0" class="navbar-item">
            <router-link to='/user' >User Profile</router-link>
          </a>
          <a v-if="currentLoggedInUser.length==0" class="navbar-item">
            <router-link to='/user' >User Profile</router-link>
          </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div v-if="currentLoggedInUser.length==0">
              <button class="button is-info is-outlined" @click="toggleRegisterModal">Sign Up</button>
              <div v-if="isModalRegisterOpen" class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <Registration @userSaved="toggleRegisterModal()" @cancel="toggleRegisterModal()"></Registration>
                </div>
                <button
                  class="modal-close is-large"
                  aria-label="close"
                  @click="toggleRegisterModal"
                ></button>
              </div>
              <a class="button is-info is-outlined" @click="toggleLoginModal">Login</a>
              <div v-if="isModalLoginOpen" class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <Login @loggedInSuccessfully="toggleLoginModal"></Login>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="toggleLoginModal"></button>
              </div>
            </div>
            <div v-if="currentLoggedInUser.length>0">
              <a class="button is-info is-outlined" @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Login from "./Login.vue";
import Registration from "./Registration.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "NavBar",
  components: {
    Login,
    Registration
  },
  data() {
    return {
      isModalRegisterOpen: false,
      isModalLoginOpen: false
    };
  },
  methods: {
    ...mapActions(["deleteCurrentUserAction"]),
    toggleRegisterModal() {
      this.isModalRegisterOpen = !this.isModalRegisterOpen;
    },
    toggleLoginModal() {
      this.isModalLoginOpen = !this.isModalLoginOpen;
    },
    logout() {
      console.log(this.currentLoggedInUser);
      if (this.currentLoggedInUser.length > 0) {
        this.deleteCurrentUserAction(this.currentLoggedInUser[0]);
      }
      console.log(this.currentLoggedInUser);
    }
  },
  computed: {
    // activities() {
    //   return this.$store.state.activities;
    // }
    // ...mapState({activities: state => state.activities}),
    ...mapState({ currentLoggedInUser: "currentLoggedInUser" })
  }
};
</script>

<style lang="scss" scoped>
</style>