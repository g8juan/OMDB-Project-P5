import axios from "axios" 

export const passwordLogin = (password) => {
    return { type: 'PASSWORD_LOGIN', password: password }
}

export const userLogin = (user) => {
    return { type: 'USER_LOGIN', user: user }
}

export const loginAction = (userInfo) => (dispatch) => {
    return axios.post('/api/login', userInfo)
        .then((data) => {
        dispatch(userLogin(data.data.email))
        dispatch(passwordLogin(data.data.password))
        })
        .catch(err => err)
}

export const logOutAction = () => (dispatch) => {
    return axios.get('/api/logout')
            .then((data) => {
            dispatch(userLogin(''))
            dispatch(passwordLogin(''))
            })
            .catch(err => err)
}