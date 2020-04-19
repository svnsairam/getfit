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
          <input class="input" type="text" placeholder="First Name" v-model="authorizedUser.firstName" />
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="authorizedUser.lastName"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="Username" v-model="authorizedUser.userName" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="dateOfBirth">Date Of Birth</label>
        <input type="date" class="input" id="dateOfBirth" v-model="authorizedUser.dateOfBirth" />
      </div>

      <div class="field">
        <label class="label">Country</label>
        <div class="control">
          <input class="input" type="email" placeholder="Country" v-model="authorizedUser.country" />
        </div>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input
            class="input is-success"
            type="text"
            placeholder="Phone"
            v-model="authorizedUser.phone"
          />
        </div>
      </div>


      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="authorizedUser.email" />
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
        phone:'',
        country:'',
        dateOfBirth:'1900-01-01',
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