import axios from "axios"
import { onMounted, ref } from "vue"
import getters from "../store modules/modules/getters"
export default function show() {
  const url = import.meta.env.VITE_API_URl
  const apiurl = url
  const show = ref([getters.getcurrency])
  function getApiData() {
    axios.get(apiurl).then(response => show.value = response.data[0].currencies)
  }
  onMounted(() => {
    getApiData()
  })
  return { getApiData, onMounted, show, }
}
