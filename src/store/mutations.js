import { createStore } from 'vuex'
import store from '../store';
const PROP1_UPDATED = (state, payload) => {
    deleteitemfromwatchlist (state, payload) ;{
        let item = store.state.watchlist.find(item => item.id === payload)
        state.watchlist.splice(state.watchlist.indexOf(item), 1)
        state.songs.push(item)
    }
  };
  
  const PROP2_UPDATED = (state, payload) => {
    additemtowatchlist(state, payload); {
        let item = state.songs.find(item => item.id === payload)
        state.watchlist.push(item)
        state.songs.splice(state.songs.indexOf(item), 1)

    }
  };
  
  export default {
    PROP1_UPDATED,
    PROP2_UPDATED,
  };