<template lang="pug">
  .screen_shot
    v-btn.shot(color="#eee" fab large elevation="0" @click="ScreenShot()")
      v-icon(color="#e45e8a") fas fa-camera
</template>
<script>
export default {
  methods: {
    ScreenShot() {
      this.$store.commit('takeScreenShot')
    }
  }
}
</script>
<style lang="scss" scoped></style>
