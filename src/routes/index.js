import {
    Login,
    Register,
    NotFound,
    LaoBanInfo,
    DaShenInfo,
    DaShen,
    LaoBan
} from '../views/index'

//构建一级路由
export const adminRoutes = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/register',
        component: Register
    },
    {
        pathname:'/404',
        component:NotFound
    }
]

//构建二级路由
export const mainRoutes = [
    {
        pathname:'/main/laobaninfo',
        component:LaoBanInfo
    },
    {
        pathname:'/main/dasheninfo',
        component:DaShenInfo
    },
    {
        pathname:'/main/dashen',
        component:DaShen
    },
    {
        pathname:'/main/laoban',
        component:LaoBan
    }
]
