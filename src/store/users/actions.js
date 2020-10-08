import actionTypes from './actionTypes'

export const loginTokenAction = accessToken => {
    return {
        type: actionTypes.LOGIN_CURRENT_USER,
        payload: accessToken
    }
}


export const logoutAction = () => {
    return {
        type: actionTypes.LOGOUT_USER
    }
}

export const changeThemeAction = () => {
    return {
        type: actionTypes.CHANGE_THEME
    }
}

export const getCurrentUserAction = currentUser => {
    return {
        type: actionTypes.GET_CURRENT_USER,
        payload: currentUser
    }
}


export const updateUserAction = currentUser => {
    return {
        type: actionTypes.UPDATE_USER,
        payload: currentUser
    }
}

export const getUsersAction = users => {
    return {
        type: actionTypes.GET_USERS,
        payload: users
    }
}

export const updateUserPasswordAcion = () => {
    return {
        type: actionTypes.UPDATE_PASSWORD
    }
}

export const selectIdUserAction = id => {
    return {
        type: actionTypes.SELECT_ID_USER,
        payload: id
    }
}



export const getPostAction = post => {
    return {
        type: actionTypes.GET_POST,
        payload: post
    }
}

export const addNewPostAcion = newPost => {
    return {
        type: actionTypes.ADD_NEW_POST,
        payload: newPost
    }
}

export const getUserAction = user => {
    return {
        type: actionTypes.GET_USER,
        payload: user
    }
}


export const getPostsAction = posts => {
    return {
        type: actionTypes.GET_POSTS,
        payload: posts
    }
}


export const likePostAcion = () => {
    return {
        type: actionTypes.LIKE_POST
    }
}

export const changeAvaAcion = () => {
    return {
        type: actionTypes.CHANGE_AVA,
    }
}

export const getCommentsAction = comments => {
    return {
        type: actionTypes.GET_COMMENTS,
        payload: comments
    }
}

export const createPostAcion = () => {
    return {
        type: actionTypes.CREATE_POST
    }
}