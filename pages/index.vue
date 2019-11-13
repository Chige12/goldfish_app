<template lang="pug">
  .container
    .user_select(v-if="SwitchUser===''")
      UserSelect
    .user_select(v-if="SwitchUser!==''")
      Main
      .user_reset
        v-btn(@click="ResetUser()") User Reset
</template>

<script>
export default {
  components: {
    UserSelect: () => import('~/components/organisms/UserSelect.vue'),
    Main: () => import('~/components/organisms/Main.vue')
  },
  computed: {
    SwitchUser() {
      return this.$store.state.goldfish.user
    }
  },
  methods: {
    ResetUser() {
      this.$store.commit('goldfish/SetUser', '')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.user_reset {
  position: absolute;
  top: 4px;
  right: 8px;
}
</style>
