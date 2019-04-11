import axiosAuth from '../auth/axiosAuth'
export const LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    FETCHED = 'FETCHED',
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    NEW_FRIEND = 'NEW_FRIEND';

export const login = creds => dispatch => {
    axiosAuth()
        .post('http://localhost:5000/api/login', creds)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.payload
        }))
        .catch(err => console.log(err))
    localStorage.setItem('user', JSON.stringify(creds))
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

export const edit = (edits, id) => dispatch => {
    axiosAuth()
        .put(`http://localhost:5000/api/friends/${id}`, edits)
        .then(res => dispatch({
            type: EDIT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const deleter = id => dispatch => {
    axiosAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => dispatch({
            type: DELETE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const newFriend = nf => dispatch => {
    axiosAuth()
        .post('http://localhost:5000/api/friends', nf)
        .then(res => dispatch({
            type: NEW_FRIEND,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
