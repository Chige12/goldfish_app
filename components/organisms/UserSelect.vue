<template lang="pug">
  .user_select
    .user_select_container
      .user_name {{user.name}} としてログイン中
      .user_select_button
        v-btn( outlined x-large @click="SetUserImage('child')") 子供用UI
      .user_select_button
        v-btn( outlined x-large @click="SetUserImage('parent')") 大人用UI
    .sign_out
      v-btn( outlined large @click="SignOut()") サインアウト
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    SetUserImage(image) {
      this.$store.commit('setUserImage', image)
    },
    SignOut() {
      this.$store.commit('signOutUser')
    }
  }
}
</script>
<style lang="scss" scoped>
.user_name {
  padding: 24px 0;
  font-size: 1.2rem;
}

.user_select_button {
  padding: 4px;
}
.sign_out {
  margin-top: 24px;
}
</style>
