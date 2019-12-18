<template lang="pug">
  .goldfish_list
    v-app
      MembersOnly
        HeaderMenu(:title="'金魚リスト'")
        .container

</template>
<script>
import MembersOnly from '~/components/members-only.vue'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'

export default {
  components: {
    MembersOnly,
    HeaderMenu
  },
  data() {
    return {
      goldfishes: [
        { id: 0, name: '金ちゃん' },
        { id: 1, name: '金ちゃん2' },
        { id: 2, name: '金ちゃん3' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.goldfish_list {
  width: 100%;
}
</style>
