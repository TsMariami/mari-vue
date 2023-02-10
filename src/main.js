import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from './store'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import products from './views/products.vue'
import cart from './views/cart.vue'

const routes = [{
    path : '/',
    name:'Home',
    component: Home
},
{
    path : '/About',
    name:'About',
    component: About
},{
    path : '/products',
    name:'products',
    component: products
},{
    path : '/cart',
    name:'cart',
    component: cart
}
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


createApp(App).
use(store).
use(router).
mount('#app')