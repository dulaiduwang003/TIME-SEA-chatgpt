import { createStore } from 'vuex'

export default createStore({
    state: {
        userinfo: false
    },
    getters: {
        userinfo: state => state.userinfo
    },
    mutations: {
        logout(state) {
            state.userinfo = false
        },
        setUserinfo(state, info) {
            state.userinfo = info
            localStorage.setItem('user', JSON.stringify(info));
        },
        initState(state) {
            let token = localStorage.getItem('token')
            if (token) {
                let user = localStorage.getItem('user')
                state.userinfo = JSON.parse(user)
            }
            console.log(state.userinfo)
        }
    },
    actions: {},
    modules: {}
})
