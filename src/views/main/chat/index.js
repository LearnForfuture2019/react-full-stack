import React, {Component} from 'react'
import {
    NavBar,
    List,
    Icon,
    InputItem
} from 'antd-mobile'

import './chat.css'
const {Item} = List
export default class Chat extends Component {
    render() {
        return (
            <div id='chat-page'>
                <NavBar
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
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
                        placeholder='请输入'
                        extra={
                            <span>发送</span>
                        }
                    />
                </div>
            </div>

        )
    }
}
