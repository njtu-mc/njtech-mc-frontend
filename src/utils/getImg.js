import store from "../store";

export const getAvatar=()=>'https://crafatar.com/renders/head/'+store.state.user.mc_id
export const getBodyImg=()=>'https://crafatar.com/renders/body/'+store.state.user.mc_id