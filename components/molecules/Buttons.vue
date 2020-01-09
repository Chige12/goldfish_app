<template lang="pug">
  .buttons
    .icon: v-btn(nuxt to="/list" fab small elevation="0" )
      v-icon(color="#e45e8a") fas fa-fish
    .icon: v-btn(nuxt to="/comments" fab small elevation="0" )
      v-icon(color="#e45e8a") fas fa-comment-dots
    .icon: v-btn(nuxt to="/edit" fab small elevation="0" )
      v-icon(color="#e45e8a") fas fa-cog
</template>
<style lang="scss" scoped>
.buttons {
  position: absolute;
  top: 4px;
  right: 4px;
  display: block;
}
.icon {
  margin: 4px;
}
</style>
