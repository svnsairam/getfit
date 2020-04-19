<template>
  <div>
    <div v-if="currentLoggedInUser.length>0" class="columns is-mobile is-centered">
       <div class="column is-half">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" v-model="currentLoggedInUser[0].firstName" />
        </div>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="currentLoggedInUser[0].lastName" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="currentLoggedInUser[0].email" />
        </div>
      </div>
      
      <div class="field">
        <label class="label" for="dateOfBirth">Date Of Birth</label>
        <input type="date" class="input" id="dateOfBirth" v-model="currentLoggedInUser[0].dateOfBirth" />
      </div>

      <div class="field">
        <label class="label">Country</label>
        <div class="control">
          <input class="input" type="email" placeholder="Country" v-model="currentLoggedInUser[0].country" />
        </div>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input
            class="input is-success"
            type="text"
            placeholder="Phone"
            v-model="currentLoggedInUser[0].phone"
          />
        </div>
      </div>


      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-link" @click="update">Update</button>
        </div>
      </div>
      <div v-if="updatedSuccessfully">
        <p class="is-success">User Details updated successfully</p>
      </div>
    </div>
    </div>
    <div v-if="currentLoggedInUser.length==0">Please Login to View the Profile...</div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";

export default {
  name: "UserProfile",
  data() {
    return {
      user: {},
      updatedSuccessfully: false,
    };
  },
  created () {
    this.updatedSuccessfully = false;
  },
  methods: {
        ...mapActions(['updateAuthorizedUserAction']),
    update() {
      this.updatedSuccessfully = true;
      this.updateAuthorizedUserAction(this.currentLoggedInUser[0]);
    }
  },
  computed: {
    // activities() {
    //   return this.$store.state.activities;
    // }

    // We get activities from activity state.
    ...mapState({ currentLoggedInUser: "currentLoggedInUser" }),
  }
};
</script>

<style lang="scss" scoped>
</style>