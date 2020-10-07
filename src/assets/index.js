export function getDirectPath(header,type) {
    let path = '/main/'
    if (!header){
        //信息不完善，去到信息完善页面
        return path += type + 'info'
    }else{
        //信息完善了，去到大神主界面
        return path += type
    }
}
