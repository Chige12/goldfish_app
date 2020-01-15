<template lang="pug">
  .user_select
    .user_select_container
      .user_name {{user.displayName}} としてログイン中
      .user_select_button
        v-btn( outlined x-large @click="SetUserType('child')") 子供用UI
      .user_select_button
        v-btn( outlined x-large @click="SetUserType('parent')") 大人用UI
    .log_out
      v-btn( outlined large @click="LogOut()") ログアウト
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    SetUserType(type) {
      this.$store.commit('setUserType', type)
    },
    LogOut() {
      this.$store.dispatch('logout')
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
.log_out {
  margin-top: 24px;
}
</style>
