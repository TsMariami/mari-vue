import Home from '../views/Home.vue'
import Shorts from '../views/shorts.vue'
import video from '../views/video.vue'
import cart from '../views/cart.vue'
import nbgComponent from '../views/nbgComponent.vue'

const routes = [{
    path : '/',
    name:'Home',
    component: Home
},
{
    path : '/shorts',
    name:'Shorts',
    component: Shorts
},
{
    path : '/video',
    name:'video',
    component: video
},
{
    path : '/cart',
    name:'cart',
    component: cart
},
{
    path : '/nbg',
    name:'nbg',
    component: nbgComponent
},
]

export default routes