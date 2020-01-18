<template lang="pug">
  .edit
    v-app
      MembersOnly
        HeaderMenu(:title="'Edit'")
        .container
          v-list(two-line)
            v-subheader ログイン情報
            v-list-item
              v-list-item-avatar
                img(
                  :src="UserInfo.photoURL"
                  :alt="UserInfo.displayName"
                )
              v-list-item-content
                v-list-item-title {{UserInfo.displayName}}
                v-list-item-subtitle {{UserInfo.email}}
            v-list-item
              v-row(align="center")
                v-col.grow.body-2 {{UserInfo.providerData[0].providerId}}でログイン中
                v-col.shrink: v-btn(right small class="btn btn-light btn-block" tabindex="" @click="logout") ログアウト
            v-subheader 設定項目
            v-list-item
              v-select(
                v-model="SwitchUserType"
                :items="user_type"
                label="User Type"
                color="#e45e8a"
              )
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
    user_type: ['子供', '親']
  }),
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  computed: {
    UserInfo() {
      return this.$store.state.user
    },
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
  z-index: 1;
  width: 100%;
}
@include pageTransition;
</style>
