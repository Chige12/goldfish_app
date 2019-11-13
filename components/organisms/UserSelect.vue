<template lang="pug">
  .user_select
    .user_select_container
      .user_select_button
        v-btn( outlined x-large @click="SetUser('child')") 子供
      .user_select_button
        v-btn( outlined x-large @click="SetUser('parent')") 大人
</template>
<script>
export default {
  methods: {
    SetUser(user) {
      this.$store.commit('goldfish/SetUser', user)
    }
  }
}
</script>
<style lang="scss" scoped>
.user_select_button {
  padding: 4px;
}
</style>
