import React,{Component} from 'react'
import {
    NavBar,
    Card,
    WingBlank,
    WhiteSpace
} from "antd-mobile";
import Footer from '../../../components/footer'

export default class DaShen extends Component{
    render(){
        return (
            <div>
                <NavBar>老板列表</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            thumb={require('../../../components/imgs/headers/头像1.png')}
                            extra={<span>dashen1</span>}
                        />
                        <Card.Body>
                            <div>前端工程师</div>
                            <WhiteSpace size="lg" />
                            <div>描述：JS/JQuery/React</div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            thumb={require('../../../components/imgs/headers/头像2.png')}
                            extra={<span>dashen2</span>}
                        />
                        <Card.Body>
                            <div>前端工程师</div>
                            <WhiteSpace size="lg" />
                            <div>描述：JS/JQuery/React</div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }
}
