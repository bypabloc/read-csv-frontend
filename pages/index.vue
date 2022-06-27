<template>
  <div>
    Index
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'Index',
  setup() {
    const themeComposable = useTheme()

    return {
      themeComposable,
    }
  }
})
</script>