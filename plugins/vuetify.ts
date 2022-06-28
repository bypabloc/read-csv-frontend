// guide configuration
// https://codybontecou.com/nuxt3-and-pinia.html


import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#a2cb50',
      surface: '#a2cb50',
      primary: '#a2cb50',
      'primary-darken-1': '#3700B3',
      secondary: '#03DAC6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        myCustomLightTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
