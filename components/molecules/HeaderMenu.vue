<template lang="pug">
  .header_menu
    v-btn.back(nuxt to="/" color="transparent" fab small elevation="0" )
      v-icon(color="#e45e8a") fas fa-chevron-left
    .title {{title}}
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.header_menu {
  width: 100%;
  height: 60px;
  padding: 0 8px;
  border-bottom: 1px solid $theme-pink;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.title {
  padding-left: 8px;
  color: $theme-pink;
}
</style>
