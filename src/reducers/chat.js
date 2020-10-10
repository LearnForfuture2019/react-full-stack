import actionTypes from '../action/action-types'

const initChat = {
    chatMsgs:[],//消息数组
    users:{},//所有用户的集合对象
    unReadCount:0// 未读消息的数量
}

export default (state=initChat,action) =>{
    switch (action.type) {
        case actionTypes.RECEIVE_MSG_LIST:
            const {users,chatMsgs} = action.payload
            let count = 0
            chatMsgs.forEach(msgs =>{
                if (!chatMsgs.read){
                    count++
                }
            })
            return {
                ...state,
                users,
                chatMsgs,
                unReadCount:count
            }
        default:
            return state
    }
}
