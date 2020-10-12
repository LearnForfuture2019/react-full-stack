import React, {Component} from 'react'
import {
    TabBar
} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const data = [
    {
        title: '大神',
        key: 'dashen',
        icon: 'dashen',
        selectedIcon: 'dashen-selected'
    }, {
        title: '老板',
        key: 'laoban',
        icon: 'laoban',
        selectedIcon: 'laoban-selected'
    }, {
        title: '消息',
        key: 'message',
        icon: 'message',
        selectedIcon: 'message-selected'
    }, {
        title: '个人',
        key: 'personal',
        icon: 'personal',
        selectedIcon: 'personal-selected'
    },
]
const mapState = state => ({
    user: state.user,
    unReadCount: state.chat.unReadCount
})

@connect(mapState)
@withRouter
class Footer extends Component {
    handlePress = (value) => {
        const path = '/main/' + value
        this.setState({
            selectedTab: value,
        })
        this.props.history.push(path)

    }

    render() {
        const {unReadCount} = this.props
        console.log(unReadCount)
        const {type} = JSON.parse(window.sessionStorage.getItem('user'))
        const filterData = data.filter(item => item.key !== type)
        //用来保证底部导航选中图标与页面相匹配
        const isSelected = this.props.location.pathname.split('/')[2]
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                className='tabBar'
            >
                {
                    filterData.map(item => {
                        if (item.key === 'message') {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    badge={unReadCount}
                                    icon={{uri: require(`../imgs/nav/${item.icon}.png`)}}
                                    selectedIcon={{uri: require(`../imgs/nav/${item.selectedIcon}.png`)}}
                                    selected={isSelected === item.key}
                                    onPress={this.handlePress.bind(this, item.key)}
                                />
                            )
                        } else {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    key={item.key}
                                    icon={{uri: require(`../imgs/nav/${item.icon}.png`)}}
                                    selectedIcon={{uri: require(`../imgs/nav/${item.selectedIcon}.png`)}}
                                    selected={isSelected === item.key}
                                    onPress={this.handlePress.bind(this, item.key)}
                                />
                            )
                        }
                    })
                }
            </TabBar>
        )
    }
}

export default Footer
