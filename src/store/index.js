import { createStore } from 'vuex'
import myplugin from './plugin/plugin'
const store = createStore({
        plugins: [myplugin]
})
export default store

