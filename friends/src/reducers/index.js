import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCHED } from '../actions';

const initialState = {
    friends: [],
    loggingIn: false,
    error: null,
    loggedIn: false,
    fetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case FETCHED:
            return {
                ...state,
                fetched: true,
                friends: action.payload
            }
        default:
            return state;
    }
}