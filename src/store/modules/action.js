const actions = {
    filtervideos({ commit }, payload) {
        if(payload.length >2 ){
         commit('UPDATE_KEYWORD', payload)   
     } else{
            commit('UPDATE_KEYWORD', null)  
     }
     console.log(payload)
    },
}
export default actions