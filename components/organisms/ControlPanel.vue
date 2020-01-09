<template lang="pug">
  .control_panel
    ScreenShot
</template>
<script>
import ScreenShot from '~/components/atoms/ScreenShot.vue'

export default {
  components: {
    ScreenShot
  }
}
</script>
<style lang="scss" scoped>
.control_panel {
  width: 100%;
  height: 160px;
  background: #fff;
}
</style>
