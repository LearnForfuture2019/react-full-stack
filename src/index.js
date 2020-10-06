import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'

import {adminRoutes} from './routes'
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path='/admin' component={App}/>
            {
                adminRoutes.map(route =>{
                    return (
                        <Route path={route.pathname}
                               key={route.pathname}
                               component={route.component}/>
                    )
                })
            }
            {/*访问根目录的话，跳转到/admin*/}
            <Redirect to='/admin' from='/' exact/>
            {/*上述路由都没有匹配到，显示404*/}
            <Redirect to='/404' />
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);
