import store from "./store";
import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // const name = store.state.user.mc_name, id = store.state.user.mc_id

    try {
        await store.dispatch('user/getInfo')
        next()
    } catch (error) {
        store.commit('user/SET_MC_ID', 0)
        store.commit('user/SET_MC_NAME', '')
        if (to.path !== '/') next({path: '/'})
        else next()
    }
    NProgress.done()
})
router.afterEach(() => {
    NProgress.done()
})