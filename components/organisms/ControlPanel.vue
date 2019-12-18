<template lang="pug">
  .control_panel
    Buttons
    ScreenShot
</template>
<script>
import ScreenShot from '~/components/atoms/ScreenShot.vue'
import Buttons from '~/components/molecules/Buttons.vue'

export default {
  components: {
    ScreenShot,
    Buttons
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.control_panel {
  width: 100%;
  height: 160px;
  background: #fff;
}
</style>
