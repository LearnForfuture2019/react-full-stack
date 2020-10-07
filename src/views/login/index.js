import React, {Component} from 'react'
import {
    NavBar,
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {userLogin} from '../../action/user'
import Logo from "../../components/logo";
import {Redirect} from 'react-router-dom'
import './login.css'
import {connect} from "react-redux";
const mapState = state =>({user:state.user})
@connect(mapState,{userLogin})
class Login extends Component {
    state = {
        username: '',
        password: '',
    }
    handleChange = (type, value) => {
        this.setState({
            [type]: value
        })
    }
    login = () => {
        const {username, password} = this.state
        this.props.userLogin({username,password})
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
export default Login
