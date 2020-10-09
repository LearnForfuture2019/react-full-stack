import actiosTypes from '../action/action-types'
import {getDirectPath} from '../assets/index'

const initUser = {
    _id:'',
    username: '',
    password: '',
    type: '',
    header: '',
    info: '',
    salary: '',
    company: '',
    post: '',
    errMsg:'',
    path:''
}

export default (state = initUser, action) => {
    switch (action.type) {
        case actiosTypes.ERROR_MESSAGE:
            return {...state,errMsg: action.payload}
        case actiosTypes.LOGIN_SUCCESS:
            const {header,type} = action.payload
            const path = getDirectPath(header,type)
            return {...state,...action.payload,errMsg: '',path}
        case actiosTypes.LOGIN_FAILED:
            return {...state,errMsg: action.payload}
        case actiosTypes.LOG_OUT:
            return initUser
        default:
            return state
    }
}
