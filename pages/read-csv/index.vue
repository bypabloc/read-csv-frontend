<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-file-input
      accept="text/csv"
      label="Indicate the csv"
      prepend-icon="mdi-file-document"
      :rules="[
        v => !!v || 'Please indicate the csv'
      ]"
      v-model="csvs"
    ></v-file-input>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="generateCharts"
    >
      Generate charts
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// login
// https://codesandbox.io/s/vuetify-top-navbar-frhu8

export default defineComponent({
  name: 'Users',
  setup() {
    // refs
    const csvs = ref([])
    const valid = ref(false)
    const name = ref('')
    const nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
    const email = ref('')
    const emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
    const select = ref('')
    const items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ]
    const checkbox = ref(false)

    // refs
    const form = ref(null)

    const { $endpoint } = useNuxtApp()
    // methods
    const generateCharts = () => {
      console.log('generateCharts', csvs.value)
      const readCsv = $endpoint('/read-csv', {
        method: 'POST',
        // body: csvs.value,
      })
      console.log('readCsv', readCsv)
      // fetch('/api/charts', {
      //   method: 'POST',
      //   body: JSON.stringify(csvs.value),
      // })
      //   .then(res => res.json())
      //   .then(res => {
      //     console.log('res', res)
      //   })
      //   .catch(err => {
      //     console.log('err', err)
      //   })
    }
    const reset = () => {
      console.log('reset')
    }

    return {
      csvs,
      valid,
      name,
      nameRules,
      email,
      emailRules,
      select,
      items,
      checkbox,
      generateCharts,
      reset,

      form,
    }
  }
})
</script>