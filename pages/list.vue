<template lang="pug">
  .goldfish_list
    v-app
      MembersOnly
        HeaderMenu(:title="'金魚リスト'")
        GoldfishList(:goldfishes="goldfishes" @openEditor="openEditor")
        .goldfish_list_edit(:class="{'goldfish_list_edit--open':edit}")
          .list_edit_wrapper
            .header_btns
              v-btn( depressed @click="closeEditor()").close_btn
                v-icon(left) fas fa-times
                span Close
              v-btn( color="#e45e8a" dark depressed @click="closeEditor()").close_btn
                v-icon(left dark) fas fa-save
                span Save
            v-list-item
              v-avatar
                v-icon(
                  class="grey lighten-3"
                  :color="edit_fish.color"
                ) fas fa-fish
            v-list-item
              v-list-item-content
                v-list-item-title id:
                v-list-item-subtitle {{edit_fish.id}}
            v-list-item
              v-list-item-content
                v-list-item-title Name :
                v-list-item-subtitle {{edit_fish.name}}
              v-list-item-action
                v-btn(icon @click="openEditDialog('Name',edit_fish.name)")
                  v-icon( small color="grey lighten-1") fas fa-pen
            v-list-item
              v-list-item-content
                v-list-item-title Add Day :
                v-list-item-subtitle {{edit_fish.day}} ~
              v-list-item-action
                v-btn(icon @click="openEditDialog('Add Day',edit_fish.day)")
                  v-icon( small color="grey lighten-1") fas fa-pen
            v-list-item(three-line)
              v-list-item-content
                v-list-item-title Memo :
                v-list-item-subtitle {{edit_fish.memo}}
              v-list-item-action
                v-btn(icon @click="openEditDialog('Memo',edit_fish.memo)")
                  v-icon( small color="grey lighten-1") fas fa-pen
        GoldfishInfoEdit(:dialog="dialog",:editValue="edit_value" :editProperty="edit_property" @closeEditDialog="closeEditDialog")
        .add_goldfish_btn
          v-btn(fab dark color="#e45e8a" @click="addNewFish()")
            v-icon(dark) fas fa-plus
        .add_goldfish(v-if="addnew")
          AddGoldfish(@closeNewFish="closeNewFish")
          v-btn(icon @click="closeNewFish()").close_add_fish
            v-icon( small color="grey lighten-1") fas fa-times

</template>
<script>
import MembersOnly from '~/components/members-only.vue'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import GoldfishList from '~/components/organisms/GoldfishList.vue'
import GoldfishInfoEdit from '~/components/atoms/GoldfishInfoEdit.vue'
import AddGoldfish from '~/components/organisms/AddGoldfish.vue'

export default {
  components: {
    MembersOnly,
    HeaderMenu,
    GoldfishList,
    AddGoldfish,
    GoldfishInfoEdit
  },
  data() {
    return {
      dialog: false,
      edit_property: '',
      edit_value: '',
      goldfishes: [
        {
          id: 0,
          img: '',
          name: '金ちゃん',
          day: '2019/8/15',
          memo: '夏休み、金魚すくいの屋台でとった',
          color: '#e45e8a'
        },
        {
          id: 1,
          img: '',
          name: '金ちゃん2',
          day: '',
          memo: '',
          color: 'red'
        },
        {
          id: 2,
          img: '',
          name: '金ちゃん3',
          day: '',
          memo: '',
          color: 'orange'
        }
      ],
      edit: false,
      addnew: false,
      edit_fish: {
        id: 0,
        img: '',
        name: '',
        day: '',
        memo: ''
      }
    }
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  methods: {
    openEditor(id) {
      this.edit_fish = this.goldfishes[id]
      this.edit = true
    },
    closeEditor() {
      this.edit = false
    },
    addNewFish() {
      this.addnew = true
    },
    closeNewFish() {
      this.addnew = false
    },
    removeFish() {},
    openEditDialog(property, value) {
      this.edit_property = property
      this.edit_value = value
      this.dialog = true
    },
    closeEditDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
.goldfish_list {
  z-index: 1;
  width: 100%;
  position: relative;
}

.goldfish_list_edit {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s $ease-out;
  background: rgba(#000, 0.5);
  &--open {
    opacity: 1;
    pointer-events: all;
    .list_edit_wrapper {
      transform: translateY(0);
    }
  }
}

.list_edit_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 201;
  border-radius: 16px;
  background: #fff;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  transition: 0.5s $ease-out;
  transform: translateY(30px);
}

.header_btns {
  text-align: right;
  padding: 16px;
}
.close_btn {
  margin-left: 4px;
}

.add_goldfish_btn {
  position: fixed;
  bottom: 24px;
  right: 20px;
}

.close_add_fish {
  position: absolute;
  top: 16px;
  left: 16px;
}

@include pageTransition;
</style>
