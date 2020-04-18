<template>
  <div>
    <h1 class="title is-1 is-spaced">Check out interesting activities</h1>

    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="activity in activities"
          :activity="activity"
          :key="activity.id"
          class="column is-one-quarter"
        >
          <router-link :to="'/activityDetails/' + activity.id">
            <ActivityCard :activity="activity" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";
import {mapState} from 'vuex';
export default {
  name: "Activities",
  components: {
    ActivityCard
  },
  data() {
    return {
    };
  },
    computed: {
    // activities() {
    //   return this.$store.state.activities; 
    // }
    // ...mapState({activities: state => state.activities}),
    ...mapState({activities: 'activities'}),
  },
};
</script>

<style lang="scss" scoped>
.h1 .title {
  padding-left: 100px;
}
</style>