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
        LOG_OUT() {
            localStorage.removeItem('token')
        }
    },
    actions: {
        authentication({ commit }, payload) {
            commit('SAVE_TOKEN', payload.token)
            commit('SAVE_USER', payload.user)
            console.log(payload)
            localStorage.setItem("token", JSON.stringify(payload.token))
            localStorage.setItem("user", JSON.stringify(payload.user))
        },
        updateinfo({ commit }, payload) {
            commit('UPDATE_INFO', payload)
        },
        registration({ commit }, payload) {
            commit('REGISTER', payload)

        },
        async getUsers({ commit, getters }) {
            const res = await axios.get('categories').catch(e => console.log(e));
            if (res.data.success) {
                commit("SAVE_USERS", res.data.data);
            }
        },
        async addUser({ getters, dispatch }, [name, type]) {
            await axios.post(
                'categories',
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
        async deleteUser({ getters, dispatch, state }, id) {
            await axios.delete(
                `categories/${id}`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${getters.getToken}`
                    },
                }
            )
            // .catch(e => console.log(e));
            // dispatch('getUsers');
        },
        logOut({ commit, getters },) {
            commit('LOG_OUT' )            
        }
    }
}
export default userModule