import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const data = [
    {
        title:'大神',
        key:'dashen',
        icon:'dashen',
        selectedIcon:'dashen-selected'
    },{
        title:'老板',
        key:'laoban',
        icon:'laoban',
        selectedIcon:'laoban-selected'
    },{
        title:'消息',
        key:'message',
        icon:'message',
        selectedIcon:'message-selected'
    },{
        title:'个人',
        key:'personal',
        icon:'personal',
        selectedIcon:'personal-selected'
    },
]
const mapState = state =>({user:state.user})
@connect(mapState)
@withRouter
 class Footer extends Component{
    state = {
        selectedTab: 'dashen',
    }
    handlePress = (value) =>{
        const path = '/main/'+value
        this.setState({
            selectedTab: value,
        })
        console.log(path)
        this.props.history.push(path)

    }
    render(){
        const {type} = JSON.parse(window.sessionStorage.getItem('user'))
        const filterData = data.filter(item => item.key !== type)
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                className='tabBar'
            >
                {
                    filterData.map(item =>{
                        return (
                            <TabBar.Item
                                title={item.title}
                                key={item.key}
                                icon={{uri:require(`../imgs/nav/${item.icon}.png`)}}
                                selectedIcon={{uri:require(`../imgs/nav/${item.selectedIcon}.png`)}}
                                selected={this.state.selectedTab === item.key}
                                onPress={this.handlePress.bind(this,item.key)}
                            />
                        )
                    })
                }
            </TabBar>
        )
    }
}
export default Footer
