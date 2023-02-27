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
    },
    geticons2(state){
        return state.icons2
    },
     getsearchbaricons(state){
        return state.searchbaricons
    },
    fileteredvideos: (state => (query) => {
        
    })
}
export default getters