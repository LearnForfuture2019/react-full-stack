import actionTypes from './action-types'
import {
    login,
    register,
    updateById
} from '../request'



//同步登录成功
export const loginSuccess = (userInfo) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: userInfo
})
//同步登录失败
export const loginFailed = (errMsg) => ({
    type: actionTypes.LOGIN_FAILED,
    payload: errMsg
})
//前台检验同步action
export const errorMessage = (errMsg)=>({
    type:actionTypes.ERROR_MESSAGE,
    payload:errMsg
})
//同步接收用户信息action
export const receiveUser = (data) =>({
    type:actionTypes.RECEIVE_USER,
    payload:data
})

//同步推出登录action
export const logOut = ()=>({
    type:actionTypes.LOG_OUT
})
//异步登录action
export const userLogin = (userInfo)=>{
    const {username,password,_id} = userInfo
    if (!username || !password){
        return errorMessage('账户名/密码必须输入')
    }
    return dispatch =>{
        login(userInfo)
            .then(resp =>{
                if (resp.status === 200) {
                    //表示请求发送成功
                    if (resp.data.code === 0) {
                        //表示用户名不存在
                        dispatch(loginFailed(resp.data.msg))
                    } else {
                        console.log('success')
                        //表示登录成功，
                        //保存数据到sessionStorage中
                        window.sessionStorage.setItem('user',JSON.stringify(resp.data.data.user))
                        //跳转到相应界面
                        dispatch(loginSuccess(resp.data.data.user))

                    }
                }
            })
    }
}

//异步注册action
export const userRegister =(userInfo)=>{
    const {username, password, password2} = userInfo
    if (!username || !password || !password2){
        return errorMessage('用户名/密码必须填入')
    }else if (password !== password2){
        return errorMessage('两次输入的密码不一致')
    }
    return dispatch =>{
        register(userInfo)
            .then(resp =>{
                console.log(resp)
                if (resp.status === 200){
                    if (resp.data.code === 0){
                        //用户已存在
                        dispatch(loginFailed(resp.data.msg))
                    }else {
                        window.sessionStorage.setItem('user',JSON.stringify(resp.data.data))
                        //注册成功
                        dispatch(loginSuccess(resp.data.data))
                    }
                }
            })
    }
}

//异步更新action
export const updateUser = (data)=>{
    console.log(data)
    return dispatch =>{
        updateById(data)
            .then(resp =>{
                console.log(resp)
                if (resp.status === 200){
                    if (resp.data.code === 0){
                        dispatch(loginFailed(resp.data.msg))
                    }else{
                        window.sessionStorage.setItem('user',JSON.stringify(resp.data.data))
                        dispatch(loginSuccess(resp.data.data))
                    }
                }
            })
    }
}



