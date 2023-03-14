import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from './store'
import router from './router'
// import customPlugin from '../myplugins/customPlugin'
import axios from "axios";
axios.defaults.baseURL=import.meta.env.VITE_BASE_API_URL
axios.defaults.headers['Accept'] = 'Application/json'



createApp(App)
    .use(store)
    .use(router)
    // .use(customPlugin)
    .mount('#app')
    