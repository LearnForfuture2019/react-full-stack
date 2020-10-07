import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace, Radio, Button
} from 'antd-mobile'

import {userRegister} from '../../action/user'
import {Redirect} from 'react-router-dom'
import Logo from "../../components/logo";
import './register.css'
import {connect} from "react-redux";
const mapState = state =>({user:state.user})
@connect(mapState,{userRegister})
class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen',
    }
    handleChange = (type, value) => {
        this.setState({
            [type]: value
        })
    }
    register = () => {
        const {username, password, password2, type} = this.state
        this.props.userRegister({username, password, password2, type})
    }
    toLogin = () => {
        this.props.history.push('/login')
    }
    render() {
        const {errMsg,path} = this.props.user
        if (path){
            return <Redirect to={path}/>
        }
        return (
            <div>
                <NavBar>BOSS招聘</NavBar>
                <Logo/>
                <WingBlank>
                    {
                        errMsg?<p id='error-msg'>{errMsg}</p>:null
                    }
                    <List>
                        <InputItem
                            onChange={value => this.handleChange('username', value)}
                            onFocus={this.handleFocus}
                        >用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={value => this.handleChange('password', value)}
                                   onFocus={this.handleFocus}
                        >
                            密&nbsp;&nbsp;&nbsp;码：
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type='password'
                            onChange={value => this.handleChange('password2', value)}
                            onFocus={this.handleFocus}
                        >
                            确认密码：
                        </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型：</span>
                            <Radio
                                style={{margin: '0 10px'}}
                                checked={this.state.type === 'dashen'}
                                onClick={() => this.handleChange('type', 'dashen')}
                            >
                                大神
                            </Radio>
                            <Radio checked={this.state.type === 'laoban'}
                                   onClick={() => this.handleChange('type', 'laoban')}

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
export default Register
