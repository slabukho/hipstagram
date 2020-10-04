import {
    loginFetch,
    registrationFetch,
    currentFetch,
    updateUserFetch,
    updatePasswordFetch,
    addNewPostFetch,
    getPostByIdFetch,
    getUsersFetch,
    getUserByIdFetch,
    getUsersByLoginFetch,
    followUserFetch,
    getFeedFetch,
    likeFetch
} from '../../api/auth.api'
import {
    loginTokenAction,
    logoutAction,
    getCurrentUserAction,
    updateUserAction,
    getPostAction,
    getUsersAction,
    getUserAction,
    getPostsAction
} from './actions'
import { toast } from 'react-toastify';


export const loginThunk = userData => {
    return async (dispatch) => {
        try {
            userData.loading(true)
            const { access_token } = await loginFetch(userData.data);
            localStorage.setItem('accessToken', access_token);
            dispatch(loginTokenAction(access_token))
        } catch (e) {
            toast.error('login or passworn isn`t correct', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        userData.loading(false)

    }
}

export const logoutThunk = () => {
    return async (dispatch) => dispatch(logoutAction())
}



export const getUserInfoThunk = data => {
    return async (dispatch) => {
        data.loader && data.loader(true)
        try {
            const {
                avatar,
                email,
                firstName,
                id,
                lastName,
                login,
                posts,
                followers,
                following } = await currentFetch(data.token)
            dispatch(getCurrentUserAction({
                avatar, email, firstName, id, lastName, login, posts, followers,
                following
            }))
        } catch (e) {
            toast.error(e, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        data.loader && data.loader(false)
    }
}

export const registrationThunk = ({ data, loading, comeToLogin }) => {
    return async () => {
        try {
            loading(true)
            await registrationFetch(data)
            comeToLogin()
            toast.success(`Thank you for registration!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        catch (e) {
            toast.error(e.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        loading(false)
    }
}

export const getUsersThunk = token => {
    return async (dispatch) => {
        try {
            const users = await (getUsersFetch(token))
            dispatch(getUsersAction(users))
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const getUsersByLoginThunk = ({ login, token }) => {
    return async (dispatch) => {
        try {
            const users = await (getUsersByLoginFetch({ login, token }))
            dispatch(getUsersAction(users))
        }
        catch (e) {
            console.log(e)
        }
    }
}


export const getUserThunk = id => {
    return async (dispatch) => {
        try {
            const user = await (getUserByIdFetch(id))
            dispatch(getUserAction(user))
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const updateUserPasswordThunk = ({ userData, token }) => {
    return async () => {
        try {
            await updatePasswordFetch({ userData, token })
            toast.success(`Successful password change!
            `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        catch (e) {
            toast.error(e.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
}

export const addNewPostThunk = ({ formData, token, returnToUser, setLoading }) => {
    return async () => {
        try {
            setLoading(true)
            await addNewPostFetch({ formData, token })
            returnToUser()
        }
        catch (e) {
            toast.error(e.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setLoading(false)
    }
}


export const getPostThunk = ({ id, setLoading }) => {
    return async (dispatch) => {
        try {
            setLoading && setLoading(true)
            const post = await getPostByIdFetch(id)
            dispatch(getPostAction(post))
        }
        catch (e) {

        }
        setLoading && setLoading(false)
    }
}

export const initThunk = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('accessToken')
            if (!token) dispatch(logoutThunk())
            else
                dispatch(loginTokenAction(token))
        }
        catch (e) {
        }
    }
}

export const changeLoginThunk = () => {
    return async (disptch) => {

    }
}

export const changeUserThunk = ({ user, token }) => {
    return async (disptch) => {
        try {
            const {
                avatar,
                email,
                firstName,
                id,
                lastName,
                login } = await updateUserFetch({ user: user, token: token })
            disptch(updateUserAction({
                avatar,
                email,
                firstName,
                id,
                lastName,
                login
            }))
            toast.success(`Now you-${user.firstName || user.login} ${user.lastName ? user.lastName : ''}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => window.location.assign("http://localhost:3000/login")
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const followUserThunk = ({ id, token }) => {
    return async (dispatch) => {
        try {
            await followUserFetch({ id, token })
            dispatch(getUserInfoThunk({ token: token }))
            dispatch(getUserThunk(id))
        }
        catch (e) {
            console.log(e)
        }
    }
}


export const getPostsThunk = (token) => {
    return async (dispatch) => {
        try {
            const posts = await getFeedFetch(token)
            dispatch(getPostsAction(posts))
        }
        catch (e) {
            console.log(e)
        }
    }
}


export const likeUserThunk = ({ id, token }) => {
    return async (dispatch) => {
        try {
            await likeFetch({ id, token })
            dispatch(getPostThunk({ id: id, token: token }))
            dispatch(getPostsThunk(token))

        }
        catch (e) {
            console.log(e)
        }
    }
}

