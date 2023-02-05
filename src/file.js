import{ref} from 'vue'
import axios from 'axios'
import { onMounted } from 'vue'

export default function products(){
const url = "http://items.magischer.de/api/products"
const limits = [ 5, 10, 15, 20]
const langs = ['eng', 'ge']
const limit = ref(5)
const lang = ref( 'en')
const products = ref([])
const  gama = ref()

function getApiData(thisurl = url){
  axios.get(thisurl, {
    params: {
      limit: limit.value,
      lang: lang.value
    }
  }).then(response => {
    products.value = response.data.data
    gama.value = response.data
  })
}


function changelang(e){  
    lang = e.target.value
    getApiData ()
}
function changelimit(e){
  limit = e.target.value
  getApiData()
}




   onMounted(()=> {
    getApiData()
   }) 
    return {products, getApiData, limits, langs ,gama, changelang, changelimit }
}

