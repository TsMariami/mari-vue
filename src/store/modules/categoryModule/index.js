import axios from "axios"
const categoryModule = {
    namespaced: true,
    state() {
        return {
            category: {
                name: null,
                type: null,
            }
        }
    },
    getters:{
      getCategory(state){
        return state.category
      }
    },
    actions: {
        async getCategoriesbyId( { state }, payload ) {
            const { data } = await axios.get('categories/' + payload)
            state.category = data.data
        }
    },
    async editCategory({ }, payload) {
        console.log(payload._value)
        axios.defaults.headers.common['Authorization'] =`Bearer${JSON.parse(localStorage.getItem("token"))}` 
        const { data } = await axios.put('categories/' + id , {name , type, id})
        state.category = data.data
        const { name, type, id } = payload._value  
        
     },

}


export default categoryModule