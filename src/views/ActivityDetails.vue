<template>
   <div class="event-card">
    <div class="card">
      <div class="card-content">
        <h1 class="text">{{activity.id}}</h1>
        <h2 class="is-size-4 has-text-weight-bold">{{activity.activityName}}</h2>
        
        <span>{{activity.activityDescription}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityDetails",
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
  },
  created() {
    const ID = Number(this.$route.params.id);
    console.log("hhhhhhhhhhhhhhhhh "+ID);
    let event = this.activities.find(activity => activity.id === ID);
    this.activity = event;
  }
};
</script>

<style lang="scss" scoped>
</style>