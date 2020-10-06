import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace, Radio, Button
} from 'antd-mobile'
import Logo from '../../components/imgs/logo/logo.jpg'
import './register.css'

export default class Register extends Component {
    state = {
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }
    handleChange =(type,value)=>{
        this.setState({
            [type]:value
        })
    }
    register = () =>{
        const {username,password,password2,type} = this.state
        console.log({username,password,password2,type})
    }
    toLogin = ()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <NavBar>BOSS招聘</NavBar>
                <img src={Logo} alt="logo" id='logo'/>
                <WingBlank>
                    <List>
                        <InputItem onChange={value => this.handleChange('username',value)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={value => this.handleChange('password',value)}
                        >
                            密&nbsp;&nbsp;&nbsp;码：
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type='password'
                            onChange={value => this.handleChange('password2',value)}
                        >
                            确认密码：
                        </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型：</span>
                            <Radio
                                style={{margin:'0 10px'}}
                                checked={this.state.type === 'dashen'}
                                onClick={() => this.handleChange('type','dashen')}
                            >
                                大神
                            </Radio>
                            <Radio checked={this.state.type === 'laoban'}
                                   onClick={() => this.handleChange('type','laoban')}

                            >
                                老板
                            </Radio>
                        </List.Item>
                        <Button type='primary' onClick={this.register}>注册</Button>
                        <Button onClick={this.toLogin}>已有账号？登录</Button>
                    </List>
                </WingBlank>
            </div>


        )
    }
}
