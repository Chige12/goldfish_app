<template lang="pug">
.index
  .container(v-if="user === null")
    //- v-btn(nuxt to="/signup") サインイン
    v-btn(class="btn btn-light btn-block" tabindex="" @click="login") Githubでログイン
  .container(v-if="user")
    .user_select(v-if="SwitchUserImage===''")
      UserSelect
    .user_select(v-if="SwitchUserImage!==''")
      Main
      .user_reset
        v-btn(@click="ResetUser()") UI
</template>

<script>
export default {
  components: {
    UserSelect: () => import('~/components/organisms/UserSelect.vue'),
    Main: () => import('~/components/organisms/Main.vue')
  },
  computed: {
    SwitchUserImage() {
      return this.$store.state.userimage
    },
    user() {
      return this.$store.state.user
    },
    comments() {
      return this.$store.state.comments
    }
  },
  async mounted() {
    await this.$store.dispatch('INIT_USERS')
  },
  methods: {
    ResetUser() {
      this.$store.commit('setUserImage', '')
    },
    login() {
      this.$store.dispatch('loginWithUserName')
    }
  }
}
</script>

<style>
.index {
  width: 100%;
}
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
