import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from './store'
import router from './router'
import customPlugin from '../myplugins/customPlugin'

createApp(App)
    .use(store)
    .use(router)
    .use(customPlugin)
    .mount('#app')
    