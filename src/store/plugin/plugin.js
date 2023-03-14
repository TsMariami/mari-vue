import userModule from '../modules/userModule'
export default function myplugin(store) {
    store.registerModule('user', userModule)
}

