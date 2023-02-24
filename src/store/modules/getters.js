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
    } ,
    getcategories(state){
        return state.categories
    } ,
     geticons(state){
        return state.icons
    }
}
export default getters