import React, {Component} from 'react'
import {
    NavBar,
    Card,
    WingBlank,
    WhiteSpace
} from "antd-mobile";
import {getListByType} from '../../../request'
import {connect} from "react-redux";

const mapState = state => ({
    user: state.user
})

@connect(mapState)
class LaoBan extends Component {
    state = {
        userList: []
    }
    //获取数据库中列表数据
    getList = () => {
        getListByType({type: 'laoban'})
            .then(resp => {
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
    }
    toChat = (userid)=>{
        this.props.history.push(`/chat/${userid}`)
    }
    render() {
        const {userList} = this.state
        return (
            <div>
                <NavBar>老板列表</NavBar>
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
            </div>
        )
    }
}

export default LaoBan
