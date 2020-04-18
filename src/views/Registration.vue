<template>
  <div>
    <header class="modal-card-head">
      <p class="modal-card-title">Register</p>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" v-model="authorizedUser.firstName" />
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" v-model="authorizedUser.lastName"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" v-model="authorizedUser.userName" />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" v-model="authorizedUser.email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="authorizedUser.password"/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-link" @click="saveAuthorizedUser">
            Submit
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="cancel">Cancel</button>
        </div>
      </div>
    </section>
      
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  name: "Registration",
   data() {
    return {
      authorizedUser: {},
    };
  },
  async created() {
      this.authorizedUser = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password:'',
      };
  },
  methods: {
    ...mapActions(['addAuthorizedUserAction','addCurrentUserAction','deleteCurrentUserAction']),
    saveAuthorizedUser() {
      this.addAuthorizedUserAction(this.authorizedUser);
      if(this.currentLoggedInUser.length>0){
        this.deleteCurrentUserAction(this.currentLoggedInUser[0]);
      }
      this.addCurrentUserAction(this.authorizedUser);
      this.$emit('userSaved');
    },
    cancel(){
      this.$emit('cancel');
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
</style>