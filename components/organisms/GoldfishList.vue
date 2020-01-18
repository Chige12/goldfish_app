<template lang="pug">
  .container
    v-list-item(
      v-for="fish in goldfishes"
      :key="`goldfish_${fish.id}`"
      @click="openEditor(fish.id)"
      )
      v-list-item-avatar
        v-icon(
          class="grey lighten-3"
          :color="fish.color"
        ) fas fa-fish
      v-list-item-content
        v-list-item-title(v-text="fish.name")
        v-list-item-subtitle(v-if="fish.day") {{fish.day}} ~
      v-list-item-action
        v-btn(icon)
          v-icon( small color="grey lighten-1") fas fa-edit
</template>
<script>
export default {
  props: {
    goldfishes: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    openEditor(id) {
      this.$emit('openEditor', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}
</style>
