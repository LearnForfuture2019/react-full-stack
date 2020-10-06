import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button
} from 'antd-mobile'
import Logo from "../../components/logo";
import './login.css'

export default class Login extends Component {
    state = {
        username:'',
        password:'',
        errMsg:''
    }
    handleChange =(type,value)=>{
        this.setState({
            [type]:value
        })
    }
    login = () =>{
        const {username,password} = this.state
        console.log({username,password})
    }
    toRegister= ()=>{
        this.props.history.push('/register')
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
                        <InputItem onChange={value => this.handleChange('username',value)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={value => this.handleChange('password',value)}
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
