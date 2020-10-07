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
import {updateUser} from '../../../action/user'
const mapState = state =>({
    user:state.user
})
@connect(mapState,{updateUser})
class LaoBanInfo extends Component {
    state = {
        header: '',
        info:'',
        post:'',
        company:'',
        salary:''
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
        const {info,header,post,salary,company} = this.state
        const {_id} = JSON.parse(window.sessionStorage.getItem('user'))
        console.log({info,header,post,salary,company,_id})
        // this.props.updateUser({info,header,post,_id})
    }
    render() {
        const data = this.getHeaderList()
        const {header,post,info} = this.state
        return (
            <div>
                <NavBar>老板信息完善</NavBar>
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
                        placeholder='请输入招聘职位'
                    >
                        招聘职位：
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        onChange={value => this.handleChange('company', value)}
                        placeholder='请输入公司名称'
                    >
                        公司名称：
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        onChange={value => this.handleChange('salary', value)}
                        placeholder='请输入职位薪资'
                    >
                        职位薪资：
                    </InputItem>
                    <WhiteSpace/>
                    <TextareaItem
                        title="职位要求："
                        autoHeight
                        placeholder='请输入职位要求'
                        onChange={val => this.handleChange('info',val)}
                    />
                    <Button type='primary' onClick={this.toSave}>保存</Button>
                </List>

            </div>


        )
    }
}
export default LaoBanInfo
