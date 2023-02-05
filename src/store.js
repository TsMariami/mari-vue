import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            products: [
                { id: 1, name: 'product 1', price: 100 },
                { id: 2, name: 'product 2', price: 200 },
                { id: 3, name: 'product 3', price: 300 },
                { id: 4, name: 'product 4', price: 400 },
            ],
            cart: []
        }
    },
    getters:{
        getproducts(state){
           return state.products
        },
        getcart(state){
         return state.cart
        }
    },
    mutations: {
        additemtocart(state, payload) {
            let item = state.products.find(item => item.id === payload)
            state.cart.push(item)
            state.products.splice(state.products.indexOf(item), 1)

        },
        deleteitemfromcart(state, payload) {
            let item = store.state.cart.find(item => item.id === payload)
            state.cart.splice(state.cart.indexOf(item), 1)
            state.products.push(item)
        }
    },
    actions: {
        additemtocart({commit}, payload){
            commit('additemtocart', payload)
        },
        deleteitemfromcart({commit},payload){
            commit ('deleteitemfromcart', payload)
        }
    }
})

export default store

