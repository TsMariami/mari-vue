import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createStore } from 'vuex'
import store from './store'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'


const routes = [{
    path : '/',
    name:'home',
    conponent: Home
},
{
    path : '/',
    name:'About',
    conponent: About
}
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


createApp(App).use(store).mount('#app')