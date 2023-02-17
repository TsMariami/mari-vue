const actions = {
    pushiteminwatchlist({ commit }, payload) {
        commit('pushiteminwatchlist', payload)
    },
    deleteitemfromwatchlist({ commit }, payload) {
        commit('deleteitemfromwatchlist', payload)
    },
    pushnewiteminAll({ commit }, payload) {
        commit('pushnewiteminAll', payload)
    }
}
export default actions