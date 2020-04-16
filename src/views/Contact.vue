<template>
  <section>
    <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button class="button is-primary">Send</button>
      </div>
      <div class="control">
        <button class="button is-light">Cancel</button>
      </div>
    </div>
    </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
</style>