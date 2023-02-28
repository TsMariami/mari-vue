const getters = {
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
    filtervideos (state) {
        if(state.keyword !== null){
            return state.videos.filter(video => video.title.toLowerCase().includes(state.keyword) )
        } else{
            return state.videos
        }
   
    } ,
    //    tagvideos (state) {
    //         return state.videos.filter(video => video.tags.toLowerCase().includes(state.categories.name) )
    // }
}
export default getters