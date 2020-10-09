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

const NotFound = Loadable({
    loader: () => import('./notFound'),
    loading: Loading,
});

const DaShenInfo = Loadable({
    loader: () => import('./main/daShenInfo'),
    loading: Loading,
});
const DaShen = Loadable({
    loader: () => import('./main/daShen'),
    loading: Loading,
});
const LaoBanInfo = Loadable({
    loader: () => import('./main/laoBanInfo'),
    loading: Loading,
});
const LaoBan = Loadable({
    loader: () => import('./main/laoBan'),
    loading: Loading,
});
const Personal = Loadable({
    loader: () => import('./main/personal'),
    loading: Loading,
});
const Message = Loadable({
    loader: () => import('./main/message'),
    loading: Loading,
});
const Chat = Loadable({
    loader: () => import('./main/chat'),
    loading: Loading,
});
export {
    Login,
    Register,
    NotFound,
    DaShenInfo,
    LaoBanInfo,
    DaShen,
    LaoBan,
    Personal,
    Message,
    Chat
}
