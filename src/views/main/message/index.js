import React, {Component} from 'react'
import {
    List,
    NavBar,
    Badge
} from 'antd-mobile'
import {connect} from 'react-redux'

const {Item} = List
const {Brief} = Item
const mapState = state => ({
    chat: state.chat,
    user: state.user
})

/*
* 对chatMsgs按chat_id进行分组，并得到每个组的llastMsg组成的数组
*   1.找出每个聊天的lastMsg，并用一个对象容器来保存{chat_id,lastMsg}
*   2.得到所有的lastMsg的数组
*   3.对数组进行排序（按create_time降序）
* */
@connect(mapState)
class Message extends Component {
    getLastMsgs = (chatMsgs, userid) => {
        //1.找出每个聊天的lastMsg，并用一个对象容器来保存{chat_id:lastMsg}
        let lastMsgObjs = {}
        chatMsgs.forEach(msg => {
            /*
            * 当前消息是发送给我的，判断是否已被读
            *   已读：unReadCount = 0
            *   未读:unReadCount = 1
            * */
            if (msg.to === userid && !msg.read) {
                //添加unReadCount属性
                msg.unReadCount = 1
            } else {
                msg.unReadCount = 0
            }
            //取出chat_id
            const chatID = msg.chat_id
            //取出对象容器中lastMsg
            let lastMsg = lastMsgObjs[chatID]
            if (!lastMsg) {
                //如果不存在该数据，那么将该数据存入对象容器
                lastMsgObjs[chatID] = msg
            } else {
                //取得当前lastMsg的unReadCount并累加msg的unReadCount属性
                let unReadCount = lastMsg.unReadCount + msg.unReadCount
                //比较create_time大小，保留大的一个
                const time1 = lastMsg.create_time
                const time2 = msg.create_time
                lastMsgObjs[chatID] = time2 > time1 ? msg : lastMsg
                //为修改后的lastMsg添加unReadCount属性
                lastMsgObjs[chatID].unReadCount = unReadCount
            }
        })
        console.log(lastMsgObjs)
        //2.得到所有的lastMsg的数组
        let lastMsgObjValues = Object.values(lastMsgObjs)
        //3.对数组进行排序（按create_time降序）
        /*
        * sort传入的参数是两个聊天对象，通过(.)运算符来确定按哪个属性进行排序
        * */
        return lastMsgObjValues.sort((m1, m2) => m2.create_time - m1.create_time)
    }
    toChat = (targetId) => {
        this.props.history.push(`/chat/${targetId}`)
    }

    render() {
        const user = JSON.parse(window.sessionStorage.getItem('user'))
        const {users, chatMsgs} = this.props.chat
        const lastMsgs = this.getLastMsgs(chatMsgs, user._id)
        return (
            <div>
                <NavBar>消息列表</NavBar>
                <List>
                    {
                        lastMsgs.map(msg => {
                            const userid = user._id
                                return (
                                    <Item
                                        extra={<Badge text={msg.unReadCount}/>}
                                        key={msg.create_time}
                                        arrow="horizontal"
                                        thumb={users[msg.to === userid?msg.from:msg.to].header ? require(`../../../components/imgs/headers/${users[msg.to === userid?msg.from:msg.to].header}.png`) : null}
                                        onClick={() => this.toChat(msg.to === userid?msg.from:msg.to)}
                                    >
                                        {msg.content}
                                        <Brief>
                                            {users[msg.to === userid?msg.from:msg.to].username}
                                        </Brief>
                                    </Item>
                                )
                            }
                        )
                    }
                </List>
            </div>
        )
    }
}

export default Message
