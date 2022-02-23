import axios from "axios";
const service = axios.create({
    timeout: 5000,
    baseURL: process.env.VUE_APP_ENV === 'dev' ? 'http://local.njtumc.org/api' : 'https://njtumc.org/api',
})
service.interceptors.request.use(config=>{
    return config
},error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response=>{
    const {data}=response
    return data
},error=>{
  return Promise.reject(error.response)
})
service.defaults.withCredentials=true
export default service