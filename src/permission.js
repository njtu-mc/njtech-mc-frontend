import store from "./store";
import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Message} from "view-design";

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // const name = store.state.user.mc_name, id = store.state.user.mc_id
    const {path,query}=to
    if(query.msg){
        Message.info(query.msg)

        await router.replace({path})
    }
    else {
        try {
            await store.dispatch('user/getInfo')
            next()
        } catch (error) {
            store.commit('user/SET_MC_ID', 0)
            store.commit('user/SET_MC_NAME', '')
            if (to.path !== '/') next({path: '/'})
            else {
                const {params} = to
                console.log(to)
                if (params.msg) {
                    console.log(params.msg)
                    next('/')
                } else
                    next()
            }
        }
        NProgress.done()
    }
})
router.afterEach(() => {
    NProgress.done()
})