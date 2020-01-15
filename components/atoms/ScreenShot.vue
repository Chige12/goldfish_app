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
<style lang="scss" scoped>
.screen_shot {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 64px;
  height: 64px;
}
</style>
