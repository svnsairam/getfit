<template>
  <div>
   
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" v-model="email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="password"/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success" @click="login">Login</button>
            </p>
          </div>
          <div class="field" v-if="userNotRegistered">
            <p class="control">
              Your are not Registerd to the GETFIT. Please Register.
            </p>
          </div>
          <div class="field" v-if="passwordIncorrect">
            <p class="control">
              Your Password is incorrect. Please Try again.
            </p>
          </div>
        </section>
      
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      userNotRegistered: false,
      passwordIncorrect: false,
    }
  },
  methods: {
    ...mapActions(['addCurrentUserAction','deleteCurrentUserAction','getAuthorizedUsersAction']),
    login() {
      if(this.authorizedUsers.length>0){
        console.log(this.authorizedUsers[0]);
      }
    const index = this.authorizedUsers.findIndex(h => h.email === this.email);
        console.log(index);

    console.log(this.authorizedUsers[index]);
    if(index==-1){
      this.userNotRegistered=true;
    }else if(this.authorizedUsers[index].password != this.password){
      this.userNotRegistered= false;
      this.passwordIncorrect = true;
    }else{
      this.userNotRegistered = false;
      this.passwordIncorrect = false;
      if(this.currentLoggedInUser.length>0){
        console.log("hi ia ma lkajflsd");
        this.deleteCurrentUserAction(this.currentLoggedInUser[0]);
      }
      this.addCurrentUserAction(this.authorizedUsers[index]);
      this.$emit('loggedInSuccessfully');
    }
    }
  },
     computed: {
    // activities() {
    //   return this.$store.state.activities; 
    // }
    // ...mapState({activities: state => state.activities}),
    ...mapState({authorizedUsers: state => state.authorizedUsers}),
    ...mapState({currentLoggedInUser: 'currentLoggedInUser'}),
  },
  created(){
    // this.authorizedUsers = this.getAuthorizedUsersAction();
  }
};
</script>

<style lang="scss" scoped>
</style>