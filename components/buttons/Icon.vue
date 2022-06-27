<template>
  <v-btn
    icon
    @click="$emit('click')"
  >
      <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
// Icons
// https://materialdesignicons.com/

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
    }
  }
})
</script>