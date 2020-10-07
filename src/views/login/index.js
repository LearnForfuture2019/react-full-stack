import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {login} from '../../request'
import {getDirectPath} from '../../assets/index'
import Logo from "../../components/logo";
import './login.css'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        errMsg: ''
    }
    handleChange = (type, value) => {
        this.setState({
            [type]: value
        })
    }
    login = () => {
        const {username, password} = this.state
        if (!username || !password) {
            return this.setState({errMsg: '用户名/密码必须输入'})
        }
        login({username, password})
            .then(resp => {
                if (resp.status === 200) {
                    //表示请求发送成功
                    if (resp.data.code === 0) {
                        //表示用户名不存在
                        this.setState({errMsg: resp.data.msg})
                    } else {
                        //表示登录成功，跳转到相应界面
                        console.log(resp)
                        const {type, header} = resp.data.data.user
                        const pathname = getDirectPath(header, type)
                        this.props.history.replace(pathname)
                    }
                }
            })
    }
    toRegister = () => {
        this.props.history.push('/register')
    }
    handleFocus = () => {
        this.setState({
            errMsg: ''
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
                        errMsg ? <p id='error-msg'>{errMsg}</p> : null
                    }
                    <List>
                        <InputItem
                            onChange={value => this.handleChange('username', value)}
                            onFocus={this.handleFocus}
                            placeholder='请输入账号'
                        >
                            用户名：
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={value => this.handleChange('password', value)}
                                   onFocus={this.handleFocus}
                                   placeholder='请输入密码'
                        >
                            密&nbsp;&nbsp;&nbsp;码：
                        </InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登录</Button>
                        <Button onClick={this.toRegister}>没有账号？注册</Button>
                    </List>
                </WingBlank>
            </div>


        )
    }
}
