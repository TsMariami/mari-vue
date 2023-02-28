const actions = {
    filtervideos({ commit }, payload) {
        if(payload.legth >2 ){
         commit('UPDATE_KEYWORD', payload)   
     } else{
            commit('UPDATE_KEYWORD', null)  
     }
        
    },
}
export default actions