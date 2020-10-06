import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace, Radio, Button
} from 'antd-mobile'
import {register} from '../../request'
import Logo from "../../components/logo";
import './register.css'

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen',
        errMsg: ''
    }
    handleChange = (type, value) => {
        this.setState({
            [type]: value
        })
    }
    register = () => {
        const {username, password, password2, type} = this.state
        if (!username || !password || !password2){
            return this.setState({errMsg:'用户名/密码必须输入'})
        }else if (password !== password2){
            return this.setState({errMsg:'两次输入的密码不一致'})
        }
        register({username, password, password2,type})
            .then(resp => {
                console.log(resp)
                if (resp.status === 200){
                    if (resp.data.code === 200){
                        //注册成功，跳转到登录页面
                        this.props.history.push('/login')
                    }else{
                        //注册失败
                        this.setState({
                            errMsg:resp.data.msg
                        })
                    }
                }
            })
    }
    toLogin = () => {
        this.props.history.push('/login')
    }
    handleFocus =()=>{
        this.setState({
            errMsg:''
        })
    }
    render() {
        const {errMsg} = this.state
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
