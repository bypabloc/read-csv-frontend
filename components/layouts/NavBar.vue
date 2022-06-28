<template>
  <v-layout>
    <v-app-bar
      color="teal-darken-4"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container
        fluid
        class="d-flex justify-center align-center"
      >
        <v-row dense>
          <v-col
            cols="10"
          >
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
  },
  setup() {
    return {
    }
  }
})
</script>