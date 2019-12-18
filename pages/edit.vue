<template lang="pug">
  .edit
    v-app
      MembersOnly
        HeaderMenu(:title="'Edit'")
        .container
          .user_reset
            v-select(
              v-model="SwitchUserType"
              :items="user_type"
              label="User Type"
              color="#e45e8a"
            )
            v-btn(class="btn btn-light btn-block" tabindex="" @click="logout") ログアウト
</template>
<script>
import MembersOnly from '~/components/members-only.vue'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'

export default {
  components: {
    MembersOnly,
    HeaderMenu
  },
  data: () => ({
    user_type: ['未設定', '子供', '親']
  }),
  computed: {
    SwitchUserType: {
      get() {
        let type = this.$store.state.user_type
        let value = ''
        if (type === 'child') {
          value = '子供'
        }
        if (type === 'parent') {
          value = '親'
        }
        if (type !== 'parent' && type !== 'child') {
          value = '未設定'
        }
        return value
      },
      set(value) {
        let type = ''
        if (value === '子供') {
          type = 'child'
        }
        if (value === '親') {
          type = 'parent'
        }
        this.$store.commit('setUserType', type)
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.edit {
  width: 100%;
}
</style>
