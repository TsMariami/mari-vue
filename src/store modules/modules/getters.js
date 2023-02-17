const getters = {
    getsongs(state) {
        return state.songs
    },
    getwatchlist(state) {
        return state.watchlist
    },
    getcurrency(state) {
        return state.currencies
    }
}
export default getters