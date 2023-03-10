
const userModule = {
    state() {
        return {
            user: [
                {
                  name: ' ',  
                  email: ' ',
                  password: ' ', 
                }
            

            ],  
        }

    },
    getters: {
        authentication(state) {
            return state.user
        }
    },
    mutations: {
        AUTHENTICATION(state, payload) {
            let User = state.users.filter(value => value.email === payload.email)
            if (User.password === payload.password) {
                state.authenticated = User
            }
        },
        REGISTER(state, payload) {
            state.user.name = payload.name
            state.user.password = payload.password
            state.user.email = payload.email
        },
        REGISTER2(state, payload) {
            state.user.push(payload)
        }
    },
    actions: {
        authentication({ commit }, payload) {
            commit('AUTHENTICATION', payload)
        },
        updateinfo({ commit }, payload) {
            commit('UPDATE_INFO', payload)
        },
        registration({ commit }, payload) {
            commit('REGISTER', payload)
            // commit('AUTHENTICATON', payload)

        },
    }





}
export default userModule