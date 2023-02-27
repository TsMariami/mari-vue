const actions = {
    pushiteminwatchlist({ commit }, payload) {
        commit('pushiteminwatchlist', payload)
    },
    deleteitemfromwatchlist({ commit }, payload) {
        commit('deleteitemfromwatchlist', payload)
    },
    pushnewiteminAll({ commit }, payload) {
        commit('pushnewiteminAll', payload)
    }, 
    filtervideos({ commit }, payload) {
        commit('filtervideos', payload)
    },
    
}
export default actions