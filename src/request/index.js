import axios from 'axios'

const service = axios.create()
//请求拦截器
service.interceptors.request.use((config) => {
    return config
})
//响应拦截器
service.interceptors.response.use(resp =>{
    return resp
})
//注册
export const register = (data) => {
    return service.post('/register', data)
}
