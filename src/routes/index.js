import {
    Login,
    Register,
    NotFound,
    LaoBanInfo,
    DaShenInfo,
    DaShen,
    LaoBan,
    Personal,
    Message,
    Chat
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
    },
    {
        pathname:'/laobaninfo',
        component:LaoBanInfo
    },
    {
        pathname:'/dasheninfo',
        component:DaShenInfo
    },
    {
        pathname:'/chat/:userid',
        component:Chat
    },
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
    },
    {
        pathname:'/main/personal',
        component:Personal
    },
    {
        pathname:'/main/message',
        component:Message
    }

]
