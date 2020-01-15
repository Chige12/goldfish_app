<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card>
      <v-card-title>
        {{ editProperty }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="NewEditValue" label="Edit" single-line />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="CloseDialog()">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="SaveValue()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    editProperty: {
      type: String,
      default: ''
    },
    editValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      new_edit_value: ''
    }
  },
  computed: {
    NewEditValue: {
      get() {
        return this.editValue
      },
      set(value) {
        this.new_edit_value = value
      }
    }
  },
  methods: {
    CloseDialog() {
      this.$emit('closeEditDialog')
    },
    SaveValue() {
      this.$emit('closeEditDialog')
    }
  }
}
</script>
