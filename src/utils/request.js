import axios from "axios";
const service = axios.create({
    timeout: 5000, baseURL: 'https://api.njtumc.org/app/v1'
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
export default service