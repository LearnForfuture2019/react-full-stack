import React, {Component} from 'react'
import {
    NavBar,
    Card,
    WingBlank,
    WhiteSpace
} from "antd-mobile";
import {getListByType} from '../../../request'
import {connect} from "react-redux";
import QueueAnim from 'rc-queue-anim'
import {getMsgListById} from '../../../action/chat'
const mapState = state => ({
    user: state.user
})

@connect(mapState,{getMsgListById})
class DaShen extends Component {
    state = {
        userList: []
    }
    //获取数据库中列表数据
    getList = () => {
        getListByType({type: 'dashen'})
            .then(resp => {
                console.log(resp.data.data)
                if (resp.status === 200) {
                    if (resp.data.code === 1) {
                        this.setState({
                            userList: resp.data.data
                        })
                    }
                }

            })
    }

    componentDidMount() {
        this.getList()
        //异步获取消息列表
        const userid = JSON.parse(window.sessionStorage.getItem('user'))._id
        this.props.getMsgListById(userid)
    }
    toChat =(userid)=>{
        this.props.history.push(`/chat/${userid}`)
    }
    render() {
        const {userList} = this.state
        console.log(this.props.dispatch)
        return (
            <div>
                <NavBar>大神列表</NavBar>
                <QueueAnim type='top' delay={100}>
                    {
                        userList.map(user => {
                            return (
                                <WingBlank size="lg" key={user._id}>
                                    <WhiteSpace size="lg"/>
                                    <Card onClick={()=>this.toChat(user._id)}>
                                        <Card.Header
                                            //这个bug是因为有的头像在开始的时候没有传入
                                            thumb={user.header ? require(`../../../components/imgs/headers/${user.header}.png`) : null}
                                            extra={<span>{user.username}</span>}
                                        />
                                        <Card.Body>
                                            <div>职位：{user.post}</div>
                                            {
                                                user.company? <div>公司：{user.company}</div>:null
                                            }
                                            {
                                                user.salary? <div>薪资：{user.salary}</div>:null
                                            }
                                            <div>描述：{user.info}</div>
                                        </Card.Body>
                                    </Card>
                                </WingBlank>
                            )
                        })
                    }
                </QueueAnim>

            </div>
        )
    }
}

export default DaShen
