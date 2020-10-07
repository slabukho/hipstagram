import actionTypes from './actionTypes'
import { SetItemLS, GetItemLS } from '../../LocalStorage'


const InitialState = () => {
    return {
        currentUser: {
            isAuth: false,
            accessToken: '',
        },
        user: {

        },
        post: {},
        users: [],
        selectedUserId: '',
        selectedUser: {},
        posts: []
    }
}

const InitialStateTheme = () => {
    const isTheme = GetItemLS('theme')
    let theme = true
    if (isTheme === false) theme = false
    return {
        theme: theme
    }
}



const userReducer = (state = InitialState(), action) => {
    switch (action.type) {
        case actionTypes.LOGIN_CURRENT_USER:
            return {
                ...state,
                currentUser: {
                    isAuth: true,
                    accessToken: action.payload
                }
            }
        case actionTypes.LOGOUT_USER: {
            localStorage.removeItem('accessToken');
            return {
                ...state,
                currentUser: {
                    isAuth: false,
                    accessToken: ''
                }
            }
        }
        case actionTypes.GET_CURRENT_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case actionTypes.UPDATE_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case actionTypes.ADD_NEW_POST: {
            return {
                ...state
            }
        }
        case actionTypes.GET_POST: {
            return {
                ...state,
                post: action.payload
            }
        }
        case actionTypes.GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case actionTypes.SELECT_ID_USER: {
            return {
                ...state,
                selectedUserId: action.payload
            }
        }
        case actionTypes.GET_USER: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }
        case actionTypes.GET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case actionTypes.GET_COMMENTS: {
            return {
                ...state,
                comments: action.payload
            }
        }
        default:
            return state;
    }
}

export const themeReducer = (state = InitialStateTheme(), action) => {
    switch (action.type) {
        case actionTypes.CHANGE_THEME: {
            SetItemLS('theme', !state.theme)
            return {
                ...state,
                theme: !state.theme
            }
        }
        default:
            return state;
    }
}

export default userReducer