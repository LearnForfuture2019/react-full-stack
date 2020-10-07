import actiosTypes from '../action/action-types'

const initUser = {
    username: '',
    password: '',
    type: '',
    header: '',
    info: '',
    salary: '',
    company: '',
    post: ''

}

export default (state = initUser, action) => {
    switch (action.type) {
        default:
            return state
    }
}
