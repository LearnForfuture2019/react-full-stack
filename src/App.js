import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Frame from './components/frame/index'
import {mainRoutes} from './routes'
export default class App extends Component{
    render(){
        return (
            <Switch>
                {
                    mainRoutes.map(route =>{
                        return (
                            <Route path={route.pathname}
                                   key={route.pathname}
                                   component={route.component}
                            />
                        )
                    })
                }
            </Switch>

        )
    }
}
