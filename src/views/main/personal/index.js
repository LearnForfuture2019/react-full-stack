import React, {Component} from 'react'
import {
    NavBar,
    List,
    Button
} from 'antd-mobile'

import {connect} from 'react-redux'
import './personal.css'
import user from "../../../reducers/user";

const {Item} = List
const {Brief} = Item
const mapState = state => ({
    user: state.user
})

@connect(mapState)
class Personal extends Component {
    logout =()=>{
        //清除sessionStorage中保存的信息
        window.sessionStorage.removeItem('user')
        //跳转到根目录
        this.props.history.replace('/')
    }
    render() {
        console.log(this.props.user)
        const {header, username, post, info, salary,company} = JSON.parse(window.sessionStorage.getItem('user'))
        return (
            <div>
                <NavBar>用户中心</NavBar>
                <div className='personal-header'>
                    <img src={require(`../../../components/imgs/headers/${header}.png`)} alt="header"/>
                    <p>{username}</p>
                </div>
                <List renderHeader={() => '相关信息'} className="my-list">
                    <Item multipleLine>
                        <Brief>职位：{post}</Brief>
                        <Brief>简介：{info}</Brief>
                        {
                            salary?<Brief>薪资：{salary}</Brief>:null
                        }
                        {
                            company?<Brief>公司：{company}</Brief>:null
                        }
                    </Item>
                </List>
                <Button type='warning' onClick={this.logout}>退出登录</Button>
            </div>
        )
    }
}

export default Personal
