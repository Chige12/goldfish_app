<template lang="pug">
  .container
    p ユーザ名を入力してください。
    form
      .form-group
        label Name
        .input-group
          .input-group-prepend
            .input-group-text @
          v-text-field(type="text" class="form-control" v-model="form.username" label="UserName")
      form-group
        v-btn.btn.btn-light.btn-block(tabindex="" @click="submitLogin") ログイン
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: ''
      }
    }
  },
  methods: {
    submitLogin() {
      if (this.form.username) {
        this.$store.dispatch('loginWithUserName', this.form.username)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style></style>
