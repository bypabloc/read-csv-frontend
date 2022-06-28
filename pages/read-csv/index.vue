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
  <LineChart
    :data="dataChart"
  />
  {{ dataChart }}
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from "vue";
import Line from '~/components/charts/line';

export default defineComponent({
  name: 'Users',
  components: {
    LineChart: Line,
  },
  setup() {
    // ref
    const csvs = ref([])
    const valid = ref(false)
    const dataChart = reactive({
        labels: ['Samuel', 'Pablo', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40]
            }
        ]
    })

    // refs
    const form = ref(null)

    const { $endpoint } = useNuxtApp()
    // methods
    const generateCharts = async () => {
      console.log('generateCharts', csvs.value)
      const fileToLoad = csvs.value[0]
      
      // FileReader function for read the file.
      const fileReader = new FileReader();
      let base64;
      // Onload of file read the file content
      fileReader.onload = async function(fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        // Print data in console
        navigator.clipboard.writeText(base64);
        
        try {
          const readCsv = await $endpoint('/read-csv', {
            method: 'POST',
            body: {
              csv: base64,
            },
          })

          const { data_for_graphs, datetime_list } = readCsv.data

          console.log('readCsv', data_for_graphs, datetime_list)
          dataChart.labels = datetime_list
          dataChart.datasets[0].data = data_for_graphs['Core 0 C0 Ocupación [%]']

        } catch (error) {
          console.log('error', error)
        }
      };
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
    }
    const reset = () => {
      console.log('reset')
    }
    
    return {
      csvs,
      generateCharts,
      reset,
      valid,

      form,

      dataChart,
    }
  }
})
</script>