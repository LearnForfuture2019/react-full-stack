import React, {Component} from 'react'
import {
    Button,
    Grid,
    InputItem,
    List,
    NavBar,
    WhiteSpace,
    TextareaItem
} from 'antd-mobile'
import {connect} from 'react-redux'

class DaShenInfo extends Component {
    state = {
        header: '',
        info:'',
        post:''
    }
    getHeaderList = () => {
        let data = []
        for (let i = 1; i <= 20; i++) {
            data.push({
                text: `头像${i}`,
                icon: require(`../../../components/imgs/headers/头像${i}.png`)
            })
        }
        return data
    }

    handleClick = (el, index) => {
        this.setState({
            header: el.text
        })
    }
    handleChange =(type,value) =>{
        this.setState({
            [type]:value
        })
    }
    toSave =()=>{
        const {info,header,post} = this.state
        console.log({info,header,post})
    }
    render() {
        const data = this.getHeaderList()
        const {header,post,info} = this.state
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                {
                    header
                        ?
                        <img src={require(`../../../components/imgs/headers/${header}.png`)}
                             alt="header"
                             style={{marginLeft: 15}}
                        />
                        :
                        <p>请选择头像</p>
                }
                <Grid
                    data={data}
                    columnNum={5}
                    onClick={this.handleClick}
                />
                <List>


                    <InputItem
                        onChange={value => this.handleChange('post', value)}
                        placeholder='请输入求职岗位'
                    >
                        求职岗位：
                    </InputItem>
                    <WhiteSpace/>
                    <TextareaItem
                        title="个人介绍："
                        autoHeight
                        placeholder='请输入个人介绍'
                        onChange={val => this.handleChange('info',val)}
                    />
                    <Button type='primary' onClick={this.toSave}>保存</Button>
                </List>

            </div>


        )
    }
}
export default connect(

)(DaShenInfo)
