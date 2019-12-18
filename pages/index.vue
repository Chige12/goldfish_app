<template lang="pug">
  .index
    v-app
      .container(v-if="user === null")
        //- v-btn(nuxt to="/signup") サインイン
        .loginbtn_wrapper
          v-btn.loginbtn(class="btn btn-light btn-block" large dark color="#4285F4" tabindex="" @click="googleLogin")
            v-icon(left color="#fff") fab fa-google
            span Googleでログイン
          v-btn.loginbtn(class="btn btn-light btn-block" large dark color="#24292E" tabindex="" @click="githubLogin")
            v-icon(left color="#fff") fab fa-github
            span Githubでログイン
      .container(v-if="user")
        MembersOnly
          .user_select(v-if="SwitchUserType===''")
            UserSelect
          .user_select(v-if="SwitchUserType!==''")
            Main
</template>

<script>
import MembersOnly from '~/components/members-only.vue'
export default {
  components: {
    MembersOnly,
    UserSelect: () => import('~/components/organisms/UserSelect.vue'),
    Main: () => import('~/components/organisms/Main.vue')
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  computed: {
    SwitchUserType() {
      return this.$store.state.user_type
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
    googleLogin() {
      this.$store.dispatch('googleLogin')
    },
    githubLogin() {
      this.$store.dispatch('githubLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
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
.loginbtn {
  margin: 16px;
  display: block;
}
</style>
