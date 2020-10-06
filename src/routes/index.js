import {
    Login,
    Register,
    NotFound
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
