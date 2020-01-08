<template lang="pug">
  .add_goldfish
    LiveStream
    .live_stream_click_cover(@click="findGoldfish($event)" ref="click_cover")
    
</template>
<script>
import LiveStream from '~/components/organisms/LiveStream.vue'
export default {
  components: {
    LiveStream
  },
  methods: {
    findGoldfish(e) {
      console.log(e)
      let coverX = this.$refs.click_cover.clientWidth
      let coverY = this.$refs.click_cover.clientHeight
      let coverRatio = (coverY * 100) / coverX
      console.log(coverX, coverY)
      console.log(coverRatio)
      let raspcamX = 480
      let raspcamY = 640
      let raspcamRatio = (raspcamY * 100) / raspcamX
      console.log(raspcamRatio)
      let offsetX = e.offsetX
      let offsetY = e.offsetY
      console.log(raspcamX, raspcamY, offsetX, offsetY)
    }
  }
}
</script>
<style lang="scss" scoped>
.add_goldfish {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
}
.live_stream_click_cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 160px);
  background: transparent;
}
</style>
