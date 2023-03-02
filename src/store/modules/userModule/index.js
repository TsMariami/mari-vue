
const userModule = {
    state() {
        return {
            users: [
                {
                    id: 1, name: 'Mariam', password: 'Tsertsvadze', email: 'user@example.com '
                },
                {
                    id: 2, name: 'Mariam1', password: 'Tsertsvadze', email: 'user1@example.com '
                },
                {
                    id: 3, name: 'Mariam2', password: 'Tsertsvadze', email: 'user2@example.com '
                },
                {
                    id: 4, name: 'Mariam3', password: 'Tsertsvadze', email: 'user3@example.com '
                },
                {
                    id: 5, name: 'Mariam4', password: 'Tsertsvadze', email: 'user4@example.com '
                },

            ],
            authentication: null
        }

    },
    getters: {
        authentication(state) {
            return state.authentication
        }
    },
    mutations: {
        AUTHENTICATON(state, payload) {
            let newUser = state.users.filter(value => value.email === payload.email)
            if (newUser.password === payload.password) {
                state.authentication = newUser
            }
        },
        UPDATE_INFO(state, payload) {
            state.users.find(state.authentication).name = payload.name
            state.users.find(state.authentication).password = payload.password
            state.users.find(state.authentication).email = payload.email
        },
        REGISTER(state, payload) {
        state.users.push(payload)
    }
    },
    actions: {
        authentication({ commit }, payload) {
            commit('AUTHENTICATON', payload)
        },
        updateinfo({ commit }, payload) {
            commit('UPDATE_INFO', payload)
        }, 
        updateinfo({ commit }, payload) {
            commit('REGISTER', payload)
            commit('AUTHENTICATON', payload)
            
        },
    }





}
export default userModule