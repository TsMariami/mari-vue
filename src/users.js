import axios from "axios"
import { onMounted, ref } from "vue"

export default function show() {
  const url = import.meta.env.VITE_API_USERS_URL
  const users = ref()
  function getApiData() {
    axios.get(url).then(res => users.value = res.data.data)
    console.log(users)
  }
  onMounted(() => {
    getApiData()
  })
  return { getApiData, onMounted, users, }

}
