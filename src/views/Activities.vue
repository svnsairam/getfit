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
export default {
  name: "Activities",
  components: {
    ActivityCard
  },
  data() {
    return {
      activity: {},
      activities: [
        {
          id: 1,
          activityName: "Yoga",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 2,
          activityName: "Dance",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 3,
          activityName: "Gym",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 4,
          activityName: "Swimming",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 5,
          activityName: "Cycling",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 6,
          activityName: "Boxing",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          id: 7,
          activityName: "Football",
          activityDescription:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.h1 .title {
  padding-left: 100px;
}
</style>