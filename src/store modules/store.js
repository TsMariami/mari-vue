import { createStore } from 'vuex'
import productsModule from './module'

const store = createStore({
    modules: [productsModule],
})


export default store

