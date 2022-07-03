<template>
  <v-form>
    <v-file-input
      accept="text/csv"
      label="Indicate the csv"
      prepend-icon="mdi-file-document"
      :rules="[
        v => !!v || 'Please indicate the csv'
      ]"
      v-model="csvs"
      @change="onFileCsvChange"
    ></v-file-input>

    <v-btn
      :disabled="!formValid || formLoading"
      color="success"
      class="mr-4"
      @click="generateCharts"
      :loading="formLoading"
    >
      Generate charts
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>

  </v-form>
  <v-col cols="12">
    <v-select
      v-if="generatedCharts"
      v-model="autocompleteValue"
      :items="autocompleteItems"
      dense
      filled
      label="Gráficas"
      @update:modelValue="onAutocompleteChange"
    ></v-select>
  </v-col>
  <LineChart
    :data="dataChart"
  />
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
    const dataChart = reactive({
        labels: [],
        datasets: [
            {
                backgroundColor: '#f87979',
                data: []
            }
        ]
    })

    // refs
    const formValid = ref(false)
    const formLoading = ref(false)
    const generatedCharts = ref(false)
    const dataGenerated = reactive({
      data_for_graphs: [],
      datetime_list: [],
    })
    
    const autocompleteValue = ref('')
    const autocompleteItems = ref([])

    const { $endpoint } = useNuxtApp()

    // methods
    const generateCharts = async () => {
      formLoading.value = true
      if(!formValid.value) {
        return
      }
      const fileToLoad = csvs.value[0]
      
      const fileReader = new FileReader();
      let base64;
      fileReader.onload = async function(fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        try {
          const readCsv = await $endpoint('/read-csv', {
            method: 'POST',
            body: {
              csv: base64,
            },
          })
          
          const { data_for_graphs, datetime_list } = readCsv.data
          dataGenerated.data_for_graphs = data_for_graphs
          dataGenerated.datetime_list = datetime_list
          dataChart.labels = datetime_list

          autocompleteItems.value = Object.keys(data_for_graphs).map(key => data_for_graphs[key].name)
          generatedCharts.value = true
        } catch (error) {
          console.log('error', error)
          generatedCharts.value = false
        }
        formLoading.value = false
      };
      fileReader.readAsDataURL(fileToLoad);
    }
    const reset = async () => {
      formValid.value = false
      csvs.value = []
      dataChart.labels = []
      dataChart.datasets[0].data = []
      generatedCharts.value = false
    }

    const onFileCsvChange = (e: any) => {
      const file = e.target.files[0]
      if(file) {
        formValid.value = true
        csvs.value = [file]
      }else {
        formValid.value = false
        csvs.value = []
      }
    }
    const onAutocompleteChange = (value: any) => {
      if(value) {
        const { data_for_graphs, datetime_list } = dataGenerated
        const data_for_graphs_to_array = Object.keys(data_for_graphs).map(key => data_for_graphs[key])
        dataChart.datasets[0].data = data_for_graphs_to_array.find(item => item.name === value).data
      }
    }
    
    return {
      csvs,
      generateCharts,
      generatedCharts,
      reset,
      formValid,
      formLoading,
      autocompleteValue,
      autocompleteItems,

      dataChart,
      onFileCsvChange,
      onAutocompleteChange,
    }
  }
})
</script>