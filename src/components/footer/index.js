import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'

export default class Footer extends Component{
    state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: false,
    }
    render(){
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="大神"
                    key="dashen"
                    icon={{uri:require('../imgs/nav/dashen.png')}}
                    selectedIcon={{uri:require('../imgs/nav/dashen-selected.png')}}
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                />
            </TabBar>
        )
    }
}
