import io from 'socket.io-client'

//连接服务器，得到代表连接的socket对象
const socket = io('ws://localhost:4000')

//向服务端发送消息
socket.emit('sendMessage',{name:'Tom',date:Date.now()})
console.log('客户端向服务端发送消息：',{name:'Tom',date:Date.now()})

//接收服务端发送的 消息
socket.on('receiveMessage',function (data) {
    console.log('浏览器接收到服务器发送的消息：',data)
})
