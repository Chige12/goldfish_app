<template lang="pug">
div
  .loading(:class="{ 'is-finish': dataLoadFinish }")
    .loading_wrapper
      .progress_circule
        v-progress-circular(
          indeterminate
          color="#fff"
          :size="70"
        )
        img(src="~/assets/icon_t.png").progress_icon
      .loading_txt LOADING
    
</template>

<script>
export default {
  data() {
    return {
      dataLoadFinish: false
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.dataLoadFinish = true
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 40px;
  background: $theme-pink;
  color: white;
  &.is-finish {
    transition: opacity 1s, z-index 0s 1.01s;
    opacity: 0;
    z-index: -1;
  }
  &_wrapper {
    text-align: center;
  }
  &_txt {
    margin-top: 16px;
    font-size: 24px;
  }
}

.progress_circule {
  position: relative;
}
.progress_icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
  display: block;
  background: #fff;
  border-radius: 50%;
}
</style>
