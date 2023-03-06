
const userModule = {
    state() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Mariam',
                    password: 'Tsertsvadze',
                    email: 'user@example.com '
                },
                {
                    id: 2,
                    name: 'Mariam1',
                    password: 'Tsertsvadze',
                    email: 'user1@example.com '
                },
                {
                    id: 3,
                    name: 'Mariam2',
                    password: 'Tsertsvadze',
                    email: 'user2@example.com '
                },
                {
                    id: 4,
                    name: 'Mariam3',
                    password: 'Tsertsvadze',
                    email: 'user3@example.com '
                },
                {
                    id: 5,
                    name: 'Mariam4',
                    password: 'Tsertsvadze',
                    email: 'user4@example.com '
                },

            ],
            authenticated: null
        }

    },
    getters: {
        authentication(state) {
            return state.authenticated
        }
    },
    mutations: {
        AUTHENTICATION(state, payload) {
            let User = state.users.filter(value => value.email === payload.email)
            if (User.password === payload.password) {
                state.authenticated = User
            }
        },
        UPDATE_INFO(state, payload) {
            state.users.find(state.authenticated).name = payload.name
            state.users.find(state.authenticated).password = payload.password
            state.users.find(state.authenticated).email = payload.email
        },
        REGISTER(state, payload) {
            state.users.push(payload)
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
            commit('AUTHENTICATON', payload)

        },
    }





}
export default userModule