<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          タップした金魚を追加
        </v-card-title>
        <v-card-text>
          <p>X: {{ touchCamX }} Y: {{ touchCamY }} time: {{ timestamp }}</p>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[rules.required]"
            label="金魚の名前を入力"
            single-line
          />
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
  </div>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    touchCamX: {
      type: Number,
      default: 0
    },
    touchCamY: {
      type: Number,
      default: 0
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: '',
      warning: false,
      rules: {
        required: (value) => !!value || '必須'
      }
    }
  },
  methods: {
    CloseDialog() {
      this.$emit('closeEditDialog', null)
    },
    async SaveValue() {
      if (this.name === '') {
        this.$refs.name.validate(true)
      } else {
        const response = await this.$axios
          .$post(`${process.env.SERVER_URL}/kingyo-register`, {
            kingyo: {
              x: this.touchCamX,
              y: this.touchCamY,
              name: this.name
            },
            timestamp: this.timestamp
          })
          .catch(function(error) {
            console.log(error)
          })
        console.log(response)
        this.$emit('closeEditDialog', 'save')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
