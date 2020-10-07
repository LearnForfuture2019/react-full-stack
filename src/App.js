import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
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
