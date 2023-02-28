import productsModule from '../modules/module'
export default function myplugin(store) {
    store.registerModule('products', productsModule)
}

