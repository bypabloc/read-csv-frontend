<template>
    <v-dialog
      v-model="menu"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn large icon v-bind="props">
          <v-icon size="30">mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-card
            class="my-2"
            v-for="(theme, name) in themes"
            :key="name"
          >
            <v-card-title class="subheading">
              {{ name }}
            </v-card-title>
            <v-card-text>
              <v-switch
                v-model="theme.dark"
                hide-details
                inset
                label="Dark Mode"
              ></v-switch>
              <v-radio
                label="Select"
                color="red"
                value="red"
                v-model="themeComposable.name.value === name"
              ></v-radio>
              <v-row dense>
                <v-col
                  cols="3"
                  v-for="(color, colorName) in theme.colors"
                  :key="colorName"
                >
                  <v-card
                    :color="color"
                  >
                    <v-card-title class="text-h5">
                      {{ colorName }}
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Ref, ReactiveEffect } from 'vue'
import { useTheme } from 'vuetify'

import Icon from '~/components/buttons/Icon.vue'

export default defineComponent({
  name: 'Themes',
  components: {
    Icon,
  },
  setup() {
    const show = () => {
      console.log('show')
    }
    const themeComposable = useTheme()

    const themeSelected: Ref<string> = ref('')

    console.log(themeComposable)
    
    const themes = themeComposable.themes.value

    const themeCurrent: Ref<object> = ref(themeComposable.current.value)

    const menu: Ref<boolean> = ref(false);

    const setTheme = ({ name }) => {
      menu.value = false;
      themeComposable.global.name.value = name
      console.log('themeComposable', themeComposable)
    }

    const darkMode = () => {
      console.log('darkMode')
      console.log(themeComposable)
    }

    const toggleLightDark = () => {
      console.log('toggleLightDark', themeComposable)
      const name: string = themeComposable.name.value
      console.log('name', name)
      const newValue: boolean = !themeComposable.themes.value[name].dark
      themeComposable.themes.value[name].dark = newValue
      console.log('newValue', newValue)
    }

    return {
      menu,
      show,
      themes,
      themeComposable,
      themeCurrent,
      setTheme,
      toggleLightDark,
      themeSelected,
    }
  }
})
</script>