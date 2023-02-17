import store from "../store"
const mutations = {
    deleteitemfromwatchlist(state, payload) {
        let item = store.getters.getwatchlist.find(item => item.id === payload)
        store.getters.getwatchlist.splice(store.getters.getwatchlist.indexOf(item), 1)
        state.songs.push(item)
    },
    pushiteminwatchlist(_state, payload) {
        let item = store.getters.getsongs.find(item => item.id === payload)
        store.getters.getwatchlist.push(item)
        store.getters.getsongs.splice(store.getters.getsongs.indexOf(item), 1)
    },
    pushnewiteminAll(_state, payload) {
        let item = store.getters.getsongs.find(item => item.id === payload)
        store.getters.getsongs.push({
            name: store.state.name,
            description: store.state.description,
            url: store.state.url,
            cover: store.state.cover,
        })
    }
}
export default mutations




