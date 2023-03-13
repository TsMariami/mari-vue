import axios from "axios"
import { onMounted, ref } from "vue"
import getters from "./store/modules/getters"

export default function show() {
  const url = import.meta.env.VITE_API_USERS_URL
  const users = ref(['user/authentication'])
  function getApiData() {
    axios.get(url).then(res => users.value = res.data.data)
    console.log(users)
  }
  onMounted(() => {
    getApiData()
  })
  return { getApiData, onMounted, users, }

}
