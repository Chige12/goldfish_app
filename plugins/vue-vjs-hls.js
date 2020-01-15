import Vue from 'vue'
import VideoPlayer from 'vue-video-player'

VideoPlayer.config({
  youtube: true, // default false
  switcher: true, // default true
  hls: true // default true
})

Vue.use(VideoPlayer)
