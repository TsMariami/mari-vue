import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createStore } from 'vuex'
import store from './store'

createApp(App).use(store).mount('#app')