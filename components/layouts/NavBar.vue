<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <Icon
        icon="mdi-magnify"
      ></Icon>

      <Icon
        icon="mdi-heart"
      ></Icon>

      <ThemesButton/>

      <Icon
        icon="mdi-dots-vertical"
      ></Icon>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
    >
      <v-container>
        <slot></slot>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '~/components/buttons/Icon.vue'
import ThemesButton from '~/components/buttons/Themes.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    Icon,
    ThemesButton,
  },
  setup() {
    return {
    }
  }
})
</script>