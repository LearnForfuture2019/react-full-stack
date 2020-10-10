import actionTypes from './action-types'
import io from 'socket.io-client'
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
        initIO()
        io.socket.emit('sendMessage',{from,to,content})
    }
}
