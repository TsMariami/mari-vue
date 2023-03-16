import userModule from '../modules/userModule'
import categoryModule from '../modules/categoryModule'
export default function myplugin(store) {
    store.registerModule('user', userModule)
    store.registerModule('categories', categoryModule)
}

