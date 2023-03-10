import productsModule from '../modules/module'
import userModule from '../modules/userModule'
export default function myplugin(store) {
    store.registerModule('products', productsModule)
    store.registerModule('user', userModule)
}

