<template>
  <pre>
    <code>
      {{ theme }}
    </code>
  </pre>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
    }
  }
}
</script>