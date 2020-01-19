<template lang="pug">
  .main_vue
    LiveStream
    ControlPanel.control_panel(:class="{'control_panel--expand': expand}")
    .compress_btn(:class="{'compress_btn--expand': expand}")
      v-btn.icon(@click="compressStream()" color="#eee" fab small elevation="0" )
        v-icon(color="#e45e8a") fas fa-compress
</template>
<script>
import LiveStream from '~/components/organisms/LiveStream.vue'
import ControlPanel from '~/components/organisms/ControlPanel.vue'

export default {
  components: {
    LiveStream,
    ControlPanel
  },
  computed: {
    expand() {
      return this.$store.state.expand
    }
  },
  methods: {
    compressStream() {
      this.$store.commit('expandStream', false)
    }
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
.control_panel {
  transition: 0.3s $ease-out;
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
  &--expand {
    opacity: 0;
    pointer-events: none;
    transform: translateY(120px);
  }
}

.compress_btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transition: 0.3s $ease-out;
  pointer-events: none;
  opacity: 0;
  &--expand {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
