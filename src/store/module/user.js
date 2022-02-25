import {changeSex, getInfo, logout} from "../../api/user";
import {Message} from "view-design";

const state = {
    mc_id: 0,
    mc_name: '',
    name: '',
    email: '',
    gender: 0,
    school: ''
}
const mutations = {
    SET_MC_ID(state, mc_id) {
        state.mc_id = mc_id
    },
    SET_MC_NAME(state, mc_name) {
        state.mc_name = mc_name
    },
    SET_NAME(state, name) {
        state.name = name
    },
    SET_EMAIL(state, email) {
        state.email = email
    },
    SET_GENDER(state, gender) {
        state.gender = gender
    },
    SET_SCHOOL(state, school) {
        state.school = school
    }
}
const actions = {
    getInfo({commit}) {
        return new Promise((resolve, reject) => {
            getInfo().then(res => {
                const {mc_id, mc_name, name, gender, email, school} = res
                commit('SET_MC_ID', mc_id)
                commit('SET_MC_NAME', mc_name)
                commit('SET_NAME', name)
                commit('SET_GENDER', gender)
                commit('SET_EMAIL', email)
                commit('SET_SCHOOL', school)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            logout().then(() => {
                commit('SET_MC_ID', 0)
                commit('SET_MC_NAME', '')
                commit('SET_NAME', '')
                commit('SET_GENDER', 0)
                commit('SET_EMAIL', '')
                resolve()
            }).catch((error) => reject(error))
        })
    },
    changeSex({commit},gender){
        return new Promise((resolve,reject)=>{
            changeSex(gender).then(()=>{
                commit('SET_GENDER',gender.gender)
                Message.success('变性成功')
                resolve()
            }).catch((error)=>{console.log(error);reject(error.response)})
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}