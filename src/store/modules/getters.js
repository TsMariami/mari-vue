const getters = {
    getsongs(state) {
        return state.songs
    },
    getwatchlist(state) {
        return state.watchlist
    },
    getcurrency(state) {
        return state.currencies
    },
    getvideos(state){
        return state.videos
    }
}
export default getters