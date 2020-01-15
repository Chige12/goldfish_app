<template lang="pug">
  .control_panel
    .control_panel_wrapper
      Buttons
      ScreenShot
      CameraControlUpDown
</template>
<script>
import ScreenShot from '~/components/atoms/ScreenShot.vue'
import Buttons from '~/components/molecules/Buttons.vue'
import CameraControlUpDown from '~/components/molecules/CameraControl.vue'

export default {
  components: {
    ScreenShot,
    Buttons,
    CameraControlUpDown
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.control_panel_wrapper {
  position: relative;
  width: 100%;
  height: 120px;
  background: #fff;
}
</style>
