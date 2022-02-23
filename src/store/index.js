import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'

Vue.use(Vuex)

const state = {
    website: {name: 'NJTU MC'},

}

export default new Vuex.Store({
    state,
    mutations: {},
    actions: {},
    modules: {
        user
    }
})
