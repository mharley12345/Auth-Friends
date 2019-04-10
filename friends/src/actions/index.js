import axiosAuth from '../auth/axiosAuth'
export const LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    FETCHED = 'FETCHED';

export const login = creds => dispatch => {
    axiosAuth()
        .post('http://localhost:5000/api/login', creds)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.payload
        }))
        .catch(err => console.log(err))
}

export const fetch = () => dispatch => {
    axiosAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({
            type: FETCHED,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
