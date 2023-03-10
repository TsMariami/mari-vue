const mutations = {
    UPDATE_KEYWORD(state, payload){
        state.keyword = payload
       
    },
    UPDATE_TAG(state, tag){
      state.categories = tag
    },
}
export default mutations
