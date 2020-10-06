/*
    引入 react-loadable，实现组件的热加载
*/
import Loading from "../components/loading";
import Loadable from 'react-loadable';

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const Register = Loadable({
    loader: () => import('./register'),
    loading: Loading,
});
export {
    Login,
    Register
}
