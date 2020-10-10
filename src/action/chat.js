import actionTypes from './action-types'
import io from 'socket.io-client'
import {getMsgList} from '../request/index'
import user from "../reducers/user";
/*
* 初始化客户端socketio
*   1.连接服务器
*   2.绑定用于接收服务器返回chatMsg的监听
* */
function initIO() {
    if (!io.socket){
        io.socket = io('ws://localhost:4000')
        io.socket.on('receiveMessage',function (chatMsg) {
            console.log('收到服务器发送的消息',chatMsg)
        })
    }
}

//向服务端发送消息
export const sendMessage = ({from,to,content})=>{
    return dispatch =>{
        // initIO():这里不在需要初始化是因为我在接收消息的时候进行了初始化，io对象以及存在了
        io.socket.emit('sendMessage',{from,to,content})
    }
}
//同步接收消息列表
export const getChatMsgList = (chatMsgs)=>({
    type:actionTypes.RECEIVE_MSG_LIST,
    payload:chatMsgs
})
//异步接收聊天消息列表
export const getMsgListById = (userid) =>{
    console.log(userid)
    return dispatch =>{
        //初始化initIO
        initIO()
        getMsgList(userid)
            .then(resp =>{
                console.log(resp)
                if (resp.status === 200){
                    if (resp.data.code === 1){
                        //将该数据保存至sessionStorage
                        window.sessionStorage.setItem('chat',JSON.stringify(resp.data.data))
                        //分发同步action
                        dispatch(getChatMsgList(resp.data.data))
                    }
                }
            })
    }
}
