<template lang="pug">
  .add_goldfish
    .live_stream_add
      img(:src="streamUrl" ref="video").video         
      .live_stream_click_cover(@click="findGoldfish($event)" ref="click_cover")
    .touch_text(v-if="!addname") 追加する金魚をタップ
    GoldfishAddDialog(
      :dialog="addname"
      :touchCamX="touchCamX"
      :touchCamY="touchCamY"
      :timestamp="timestamp"
      @closeEditDialog="closeEditDialog"
    )
</template>
<script>
import GoldfishAddDialog from '~/components/atoms/GoldfishAddDialog.vue'

export default {
  components: {
    GoldfishAddDialog
  },
  data() {
    return {
      stream_path: 'streaming.mjpeg',
      camera_path: 'camera.mjpeg',
      touchCamX: 0,
      touchCamY: 0,
      addname: false,
      timestamp: 0
    }
  },
  computed: {
    streamUrl() {
      return `${process.env.SERVER_URL}/${this.stream_path}`
    }
  },
  methods: {
    findGoldfish(e) {
      let date = new Date()
      let a = date.getTime()
      this.timestamp = Math.floor(a / 1000)

      let touchX = e.offsetX
      let touchY = e.offsetY

      let coverX = this.$refs.click_cover.clientWidth
      let coverY = this.$refs.click_cover.clientHeight
      let coverRatio = (coverY * 100) / coverX
      let raspcamX = 640
      let raspcamY = 480
      let raspcamRatio = (raspcamY * 100) / raspcamX

      if (raspcamRatio <= coverRatio) {
        let raspScale = raspcamX / coverX
        let offsetY = (coverY * raspScale - raspcamY) / 2
        let touchCamX = touchX * raspScale
        let touchCamY = touchY * raspScale - offsetY
        console.log('touch_X: ' + touchCamX)
        console.log('touch_Y: ' + touchCamY)
        if (touchCamY >= 0 && touchCamY <= raspcamY) {
          this.touchCamX = Math.round(touchCamX)
          this.touchCamY = Math.round(touchCamY)
          this.addname = true
        }
      }
      if (raspcamRatio >= coverRatio) {
        let raspScale = raspcamY / coverY
        let offsetX = (coverX * raspScale - raspcamX) / 2
        let touchCamX = touchX * raspScale - offsetX
        let touchCamY = touchY * raspScale
        console.log('touch_X: ' + touchCamX)
        console.log('touch_Y: ' + touchCamY)
        if (touchCamX >= 0 && touchCamX <= raspcamX) {
          this.touchCamX = Math.round(touchCamX)
          this.touchCamY = Math.round(touchCamY)
          this.addname = true
        }
      }
    },
    closeEditDialog(key) {
      this.addname = false
      console.log(key)
      if (key === 'save') {
        this.$emit('closeNewFish')
      }
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
.live_stream_add {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}
.touch_text {
  position: absolute;
  bottom: 16px;
  left: 0;
  color: #ccc;
  font-size: 18px;
  width: 100%;
  text-align: center;
}
.live_stream_click_cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}
.video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
