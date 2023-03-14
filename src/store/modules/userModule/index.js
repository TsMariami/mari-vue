import axios from "axios"
const userModule = {
    namespaced: true,
    state() {
        return {
            token: null,
            user: {},
            users: []
        }
    },
    getters: {
        authentication(state) {
            return state.user
        },
        getusers(state) {
            return state.users
        },
        getToken(state) {
            return state.token
        }
    },
    mutations: {
        REGISTER2(state, payload) {
            state.user.push(payload)
        },
        SAVE_TOKEN(state, token) {
            state.token = token
        },
        SAVE_USER(state, user) {
            state.user = user
        },
        SAVE_USERS(state, users) {
            state.users = users
        },
    },
    actions: {
        authentication({ commit }, payload) {
            commit('SAVE_TOKEN', payload.token)
            commit('SAVE_USER', payload.user)
            console.log(payload)
        },
        updateinfo({ commit }, payload) {
            commit('UPDATE_INFO', payload)
        },
        registration({ commit }, payload) {
            commit('REGISTER', payload)
            // commit('AUTHENTICATON', payload)

        },
        async getUsers({ commit, getters }) {
            const res = await axios.get('https://items.magischer.de/api/categories').catch(e => console.log(e));
            if (res.data.success) {
                commit("SAVE_USERS", res.data.data);
            }
        },
        async addUser({ getters, dispatch }, [name, type]) {
            await axios.post(
                'https://items.magischer.de/api/categories',
                {
                    name,
                    type,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${getters.getToken}`,
                    },
                }
            ).catch(e => console.log(e));
            dispatch('getUsers');
        },
        async deleteUser({ getters, dispatch }, id) {
            await axios.delete(
                'https://items.magischer.de/api/categories',{id},
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${getters.getToken}`
                    },
                }
            ).catch(e => console.log(e));
            dispatch('getUsers');
        },
        async editUser({ getters, dispatch }, user) {
            console.log(user)
            await axios.put(
                'https://items.magischer.de/api/categories/${user.id}',
                {
                    name: user.name,
                    type: "news",
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${getters.getToken}`,
                    },
                }
            ).catch(e => console.log(e));
            dispatch('getUsers');
        },
    }
}






export default userModule