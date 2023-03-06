import userModule from './index'
export default function myplugin(store) {
    store.registerModule('users', userModule)
}

