import React, {Component} from 'react'
import {
    NavBar,
    List,
    Icon,
    InputItem
} from 'antd-mobile'
import {connect} from 'react-redux'
import {sendMessage} from '../../../action/chat'
import './chat.css'
const {Item} = List
@connect(null,{sendMessage})
class Chat extends Component {
    state = {
        content:''
    }
    submit = (value)=>{
        const to = this.props.match.params.userid
        const from = JSON.parse(window.sessionStorage.getItem('user'))._id
        const content= this.state.content.trim()
        if (content){
            this.props.sendMessage({from,to,content})
        }
        //发送完成，清除输入框数据
        this.setState({
            content:''
        })

    }
    render() {
        return (
            <div id='chat-page'>
                <NavBar
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.history.goBack()}
                >dashen2</NavBar>
                <List>
                    <Item
                        thumb={require('../../../components/imgs/headers/头像1.png')}
                    >
                        你好
                    </Item>
                    <Item
                        thumb={require('../../../components/imgs/headers/头像1.png')}
                    >
                        你好2
                    </Item>
                    <Item
                        extra='我'
                        className='chat-me'
                    >
                        我好
                    </Item>
                    <Item
                        extra='我'
                        className='chat-me'
                    >
                        我好2
                    </Item>
                </List>
                <div className='fixed-to-bottom'>
                    <InputItem
                        value={this.state.content}
                        onChange={value => this.setState({content:value})}
                        placeholder='请输入'
                        extra={
                            <span onClick={this.submit}>发送</span>
                        }
                    />
                </div>
            </div>

        )
    }
}
export default Chat
