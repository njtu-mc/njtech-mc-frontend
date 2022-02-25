import request from "../utils/request";

export const getInfo = () => {
    return request({
        url: '/user',
        method: 'get'
    })
}
export const logout = () => {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}
export const changeSex = (gender) => {
    return request({
        url: '/user/gender',
        method: 'put',
        data: gender
    })
}
export const getCode = (mail) => {
    return request({
        url: '/email',
        method: 'post',
        data: mail
    })
}
export const putMail = (data) => {
    return request({
        url: '/email',
        method: 'put',
        data
    })
}