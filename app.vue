<template>
  <v-no-ssr>
    <v-app>
      <NavBar>
        <NuxtPage />
      </NavBar>
    </v-app>
  </v-no-ssr>
</template>

<script>
import NavBar from '~/components/layouts/NavBar.vue'

export default {
  components: {
    NavBar
  },
  head: {
    title: 'Nuxt.js + Vuetify'
  },
}
</script>