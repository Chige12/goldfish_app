<template lang="pug">
  .live_stream(:class="{'live_stream_expand':expand}")
    img(:src="streamUrl" ref="video").video
    .take_picture(:class="{'take_picture--open':take_picture}")
      .take_picture_wrapper
        .canvas_wrapper
          canvas.canvas(ref="canvas" width="200px" height="200px")
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
      now_path: 'streaming.mjpeg',
      take_picture: false
    }
  },
  computed: {
    streamUrl() {
      return `${process.env.SERVER_URL}/${this.now_path}`
    },
    screenshot() {
      return this.$store.state.screenshot
    },
    expand() {
      return this.$store.state.expand
    }
  },
  watch: {
    screenshot() {
      this.SizeSync()
      this.take_picture = true
      let video = this.$refs.video
      try {
        this.ctx.drawImage(video, 0, 0)
      } catch (error) {
        this.$store.commit(
          'setAlertError',
          '正しく画像を取得できませんでした。'
        )
        console.error(error)
      }
    },
    expand(val) {
      this.now_path = val ? this.camera_path : this.stream_path
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.SizeSync()
    let video = this.$refs.video
    video.onerror = () => {
      this.$store.commit('setAlertError', '映像を読み込めませんでした。')
    }
  },
  methods: {
    SizeSync() {
      let camX = 480
      let camY = 640
      let canvas = this.$refs.canvas
      let sW = window.innerWidth
      let sH = window.innerHeight
      let scaleX = (sW - 24) / camX
      let scaleY = (sH - 120) / camY
      let scale = scaleX >= scaleY ? scaleY : scaleX
      canvas.setAttribute('width', `${camX * scale}px`)
      canvas.setAttribute('height', `${camY * scale}px`)
      canvas.style.width = `${camX * scale}px`
      canvas.style.height = `${camY * scale}px`
    },
    PictureSave() {
      let canvas = this.$refs.canvas
      this.take_picture = false

      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth() + 1
      var day = today.getDate()
      console.log(year + '年' + month + '月' + day + '日')

      let link = document.createElement('a')
      try {
        link.href = canvas.toDataURL('image/png')
      } catch (error) {
        this.alert = true
        this.error = 'エクスポートできませんでした。'
        console.error(error)
      }
      link.download = 'kingyo.png'
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
  transition: 0.3s $ease-out;
  width: 100%;
  height: calc(100% - 120px);
  background: #333;
  &_expand {
    height: 100%;
  }
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
  z-index: 300;
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
  display: block;
  position: absolute;
  width: min-content;
  height: min-content;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
}

.video,
.canvas {
  background: #666;
}
</style>
