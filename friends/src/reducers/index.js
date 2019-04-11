import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCHED, EDIT, DELETE, NEW_FRIEND } from '../actions';

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
        case EDIT:
            return {
                ...state,
                friends: action.payload
            }
        case DELETE:
            return {
                ...state,
                friends: action.payload
            }
        case NEW_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return state;
    }
}