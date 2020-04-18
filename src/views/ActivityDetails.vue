<template>
  <div>
    <div v-if="currentLoggedInUser.length>0">
      <div class="event-card">
        <div class="card">
          <div class="card-content">
            <h1 class="text">{{activity.id}}</h1>
            <h2 class="is-size-4 has-text-weight-bold">{{activity.activityName}}</h2>

            <span>{{activity.dailyPlans}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentLoggedInUser.length==0">
      <h1>Please Login to View this Page</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ActivityDetails",
  data() {
    return {
      activity: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.activityDetails.find(activity => activity.id === ID);
    this.activity = event;
  },
  computed: {
    // activities() {
    //   return this.$store.state.activities;
    // }

    // We get activities from activity state.
    ...mapState({ activityDetails: "activityDetails" }),
    ...mapState({ currentLoggedInUser: "currentLoggedInUser" })
  }
};
</script>

<style lang="scss" scoped>
</style>