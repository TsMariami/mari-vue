import store from "../store";
 
  const actionOne = (context) => {
    additemtowatchlist({ commit }, payload); {
        commit('additemtowatchlist', payload)
    }
}

const actionTwo = (context) => {
    deleteitemfromwatchlist({ commit }, payload); {
        commit('deleteitemfromwatchlist', payload)
    }
}

export default {
    actionOne,
    actionTwo,
};
