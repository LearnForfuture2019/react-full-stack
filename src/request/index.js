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

//登录
export const login = (data) =>{
    return service.post('/login',data)
}

//更新用户信息
export const updateById = (data) =>{
    return service.post('/update',data)
}

//获取用户列表
export const getListByType = (type)=>{
    return service.post('/list',type)
}

//获取聊天消息列表
export const getMsgList = (userid)=>{
    return service.post('/msglist',{userid})
}

//修改消息为已读
export const reqReadMsg = ({from,to}) =>{
    return service.post('/readmsg',{from,to})
}
