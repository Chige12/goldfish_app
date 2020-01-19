<template lang="pug">
  .CameraControl
    .v-slider_wrapper_pitch
      v-slider(
        v-model="pitch" 
        step="10" max="50" min="-50" 
        ticks
        color="#e45e8a" 
        track-color="#e45e8a"
        loader-height="20px" 
        thumb-label
        vertical
        inverse-label
        @change="ChangePitch()"
        )
    .v-slider_wrapper_yaw
      v-slider(
        v-model="yaw" 
        step="10" max="180" min="-180" 
        ticks
        color="#e45e8a" 
        track-color="#e45e8a" 
        loader-height="20px" 
        thumb-label
        inverse-label
        @change="ChangeYaw()"
        )
</template>
<script>
export default {
  data() {
    return {
      pitch: 0,
      yaw: 0
    }
  },
  methods: {
    async ChangePitch() {
      const pitch = this.pitch
      console.log('pitch:', pitch)
      const response = await this.$axios
        .$post(`${process.env.SERVER_URL}/camera-move`, {
          yaw: this.yaw,
          pitch: this.pitch
        })
        .catch((error) => {
          this.$store.commit('setAlertError', 'カメラを動かせません。')
          console.log(error)
        })
      console.log(response)
    },
    async ChangeYaw() {
      const yaw = this.yaw
      console.log('yaw:', yaw)
      const response = await this.$axios
        .$post(`${process.env.SERVER_URL}/camera-move`, {
          yaw: this.yaw,
          pitch: this.pitch
        })
        .catch((error) => {
          this.$store.commit('setAlertError', 'カメラを動かせません。')
          console.log(error)
        })
      console.log(response)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-slider_wrapper_pitch {
  position: absolute;
  top: -28px - 174px;
  left: 28px;
  display: block;
}
.v-slider_wrapper_yaw {
  position: absolute;
  top: -36px;
  left: 28px;
  display: block;
  width: calc(100vw - (28px * 2));
}
</style>
