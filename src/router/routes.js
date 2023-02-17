import Home from '../views/Home.vue'
import About from '../views/About.vue'
import products from '../views/products.vue'
import cart from '../views/cart.vue'
import nbgComponent from '../views/nbgComponent.vue'

const routes = [{
    path : '/',
    name:'Home',
    component: Home
},
{
    path : '/About',
    name:'About',
    component: About
},
{
    path : '/products',
    name:'products',
    component: products
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
