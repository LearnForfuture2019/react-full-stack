import actionTypes from './action-types'
import {login} from '../request'
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

//异步action
export const userLogin = (userInfo) => {
    return dispatch => {
        console.log(dispatch)
    }
}
