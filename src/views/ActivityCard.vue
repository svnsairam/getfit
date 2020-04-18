<template>
    <div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img v-bind:src="activity.activityImage" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{activity.activityName}}</p>
              </div>
            </div>

            <div class="content">
              {{activity.activityDescription}}
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ActivityCard',
        props: {
          activity: {
            type: Object,
            default: () => {},
          },
        },
    }
</script>

<style lang="scss" scoped>

</style>