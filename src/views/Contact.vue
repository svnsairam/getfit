<template>
  <section>
    <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="Email input" v-model="query.email"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="query.subject" />
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" v-model="query.message"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button class="button is-primary" @click="send">Send</button>
      </div>
      <div class="control">
        <button class="button is-light" @click="cancel">Cancel</button>
      </div>
    </div>
    <div v-if="querySentSuccessfully">
        <p class="is-success">Your query is received and we will get back soon in 24 hours. Thank you for contacting us.</p>
      </div>
    </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      query: {
        email: '',
        subject: '',
        message: '',
      },
      querySentSuccessfully : false,
    }
  },
  created () {
    this.querySentSuccessfully = false;
  },
  methods: {
    send() {
      this.querySentSuccessfully = true;
      this.query={
        email: '',
        subject: '',
        message: '',
       };
    },
    cancel(){
      this.querySentSuccessfully = false;
      this.query={
        email: '',
        subject: '',
        message: '',
       };
    }
  },
};
</script>

<style lang="scss" scoped>
</style>