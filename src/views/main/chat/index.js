import React, {Component} from 'react'
import {
    NavBar,
    List,
    Icon,
    InputItem,
    Grid
} from 'antd-mobile'
import {connect} from 'react-redux'
import {sendMessage, getMsgListById} from '../../../action/chat'
import './chat.css'

const {Item} = List
const mapState = state => ({
    chat: state.chat
})

@connect(mapState, {sendMessage, getMsgListById})
class Chat extends Component {
    state = {
        content: '',
        isShow:false
    }

    componentWillMount() {
        const emojis = ['😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝',
            '😄','😆','😁','😂','🙂','😍','😘','😝']
        this.emojis = emojis.map(emoji => ({text:emoji}))
    }

    componentDidMount() {
        const userid = JSON.parse(window.sessionStorage.getItem('user'))._id
        this.props.getMsgListById(userid)
    }

    submit = (value) => {
        const to = this.props.match.params.userid
        const from = JSON.parse(window.sessionStorage.getItem('user'))._id
        const content = this.state.content.trim()
        if (content) {
            this.props.sendMessage({from, to, content})
        }
        /*发送完成:
            1.清除输入框数据
            2.切换表情框的显示状态
        */
        this.setState({
            content: '',
            isShow:false
        })
    }
    handleEmoji =(el)=>{
        const emoji = el.text
        const {content} = this.state
        this.setState({
            content: content+emoji
        })
    }
    handleShow = ()=>{
        const isShow = !this.state.isShow
        this.setState({isShow})
        //异步手动派发一个resize事件，解决表情列表显示bug问题
        if (isShow){
            setTimeout(()=>{
                window.dispatchEvent(new Event('resize'))
            },0)
        }
    }
    render() {
        const to = this.props.match.params.userid
        const from = JSON.parse(window.sessionStorage.getItem('user'))._id
        const {users, chatMsgs} = JSON.parse(window.sessionStorage.getItem('chat'))
        const chat_id = [to, from].sort().join('_')
        const msgList = chatMsgs.filter(chat => chat.chat_id === chat_id)
        /*过滤出当前聊天对象的消息*/
        return (
            <div id='chat-page'>
                <NavBar
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.history.goBack()}
                >{users[to].username}</NavBar>
                <List>
                    {
                        msgList.map(msg => {
                            if (msg.from === to) { //表示我收到的消息
                                return (
                                    <Item
                                        key={msg.create_time}
                                        thumb={require(`../../../components/imgs/headers/${users[to].header}.png`)}
                                    >
                                        {msg.content}
                                    </Item>
                                )
                            } else { //表示我发出去的消息
                                return (
                                    <Item
                                        key={msg.create_time}
                                        extra='我'
                                        className='chat-me'
                                    >
                                        {msg.content}
                                    </Item>
                                )
                            }
                        })
                    }
                </List>
                <div className='fixed-to-bottom'>
                    <InputItem
                        value={this.state.content}
                        onChange={value => this.setState({content: value})}
                        onFocus={()=>this.setState({isShow:false})}
                        placeholder='请输入'
                        extra={
                            <div>
                                <span onClick={this.handleShow}>🙂</span>
                                <span onClick={this.submit}>发送</span>
                            </div>
                        }
                    />
                    {
                        this.state.isShow?(
                            <Grid data={this.emojis}
                                  columnNum={8}
                                  isCarousel={true}
                                  carouselMaxRow={4}
                                  onClick={(el)=>this.handleEmoji(el)}
                            />
                        ):null
                    }
                </div>
            </div>

        )
    }
}

export default Chat
