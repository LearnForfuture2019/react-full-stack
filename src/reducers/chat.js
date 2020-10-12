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
            //需要一个from，需要to
            let count = 0
            chatMsgs.forEach(msgs =>{
                if (!msgs.read){
                    count++
                }
            })
            console.log(count)
            return {
                ...state,
                users,
                chatMsgs,
                unReadCount:count
            }
        case actionTypes.MSG_READ:
            const newCount = state.unReadCount - action.payload
            return {
                users: state.users,
                chatMsgs: state.chatMsgs,
                unReadCount: newCount
            }
        case actionTypes.RECEIVE_MSG:
            //更新chatMsgs
            //state表示的是上一个状态的state，而不是初始状态的
            return {
                users:state.users,
                chatMsgs: [...state.chatMsgs,action.payload]
            }
        default:
            return state
    }
}
