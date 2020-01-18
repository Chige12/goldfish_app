<template lang="pug">
  .main_vue
    LiveStream
    ControlPanel
    Buttons
</template>
<script>
import LiveStream from '~/components/organisms/LiveStream.vue'
import ControlPanel from '~/components/organisms/ControlPanel.vue'
import Buttons from '~/components/molecules/Buttons.vue'
export default {
  components: {
    LiveStream,
    ControlPanel,
    Buttons
  }
}
</script>
<style lang="scss" scoped>
.main_vue {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
}
</style>
