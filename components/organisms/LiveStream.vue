<template lang="pug">
  .live_stream
    video.video(ref="video")
    .take_pinture(v-show="take_picture")
      .canvas_wrapper
        canvas.canvas(ref="canvas")
      v-btn( depressed @click="PictureSave()") SAVE
</template>

<script>
export default {
  data() {
    return {
      take_picture: false,
      videoOptions: {
        source: {
          type: 'application/x-mpegURL',
          src: 'https://example.net/live/playlist.m3u8',
          withCredentials: false
        },
        live: true
      }
    }
  },
  computed: {
    screenshot() {
      return this.$store.state.screenshot
    }
  },
  watch: {
    screenshot() {
      this.take_picture = true
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas
        .getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height)
    }
  },
  mounted() {
    let video = this.$refs.video
    let canvas = this.$refs.canvas
    canvas.style.width = `${video.clientWidth}px`
    canvas.style.height = `${video.clientHeight}px`
  },
  methods: {
    PictureSave() {
      let canvas = this.$refs.canvas
      this.take_picture = false

      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth() + 1
      var day = today.getDate()
      console.log(year + '年' + month + '月' + day + '日')

      let link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'test.png'
      link.click()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.live_stream {
  width: 100%;
  height: calc(100% - 160px);
  background: #333;
}
.video,
.canvas {
  background: #fff;
}
</style>
