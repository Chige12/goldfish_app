<template lang="pug">
  .live_stream
    img(:src="streamUrl" ref="video").video
    .take_picture(:class="{'take_picture--open':take_picture}")
      .take_picture_wrapper
        .canvas_wrapper
          canvas.canvas(ref="canvas")
        .save_btn_wrapper
          .my-2
            v-btn( large depressed @click="ClosePicture()").save_btn
              v-icon(left) fas fa-times
              span CANCEL
            v-btn( color="#e45e8a" dark large depressed @click="PictureSave()").save_btn
              v-icon(left) fas fa-download
              span SAVE
            
</template>

<script>
export default {
  data() {
    return {
      stream_path: 'streaming.mjpeg',
      camera_path: 'camera.mjpeg',
      take_picture: false
    }
  },
  computed: {
    streamUrl() {
      return `${process.env.SERVER_URL}/${this.stream_path}`
    },
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
      this.SizeSync()
    }
  },
  mounted() {
    this.SizeSync()
  },
  methods: {
    SizeSync() {
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.style.width = `${video.clientWidth}px`
      canvas.style.height = `${video.clientHeight}px`
    },
    PictureSave() {
      this.SizeSync()
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
    },
    ClosePicture() {
      this.take_picture = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.live_stream {
  width: 100%;
  height: calc(100% - 120px);
  background: #333;
}
.video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.take_picture_wrapper {
  width: 100%;
  height: 100%;
  transition: 0.5s $ease-out;
  transform: translateY(30px);
}

.take_picture {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: auto;
  z-index: 200;
  transition: 0.5s $ease-out;
  background: rgba(#000, 0.8);
  pointer-events: none;
  &--open {
    pointer-events: all;
    opacity: 1;
    .take_picture_wrapper {
      transform: translateY(0);
    }
  }
}

.save_btn_wrapper {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  margin: auto;
}
.save_btn {
  margin: 4px;
}

.canvas_wrapper {
  padding-top: 20px;
}

.video,
.canvas {
  background: #666;
}
</style>
