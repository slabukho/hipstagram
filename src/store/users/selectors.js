export const userStateSelector = state => state.user

export const getCurrentUser = state => userStateSelector(state).currentUser

export const getSelectedUserSelector = state => userStateSelector(state).selectedUserId

export const getUserSelector = state => userStateSelector(state).selectedUser

export const getUserTokenSelector = state => getCurrentUser(state).accessToken

export const getCurrentUserIsAuth = state => getCurrentUser(state).isAuth

export const getCurrentUserInfo = state => userStateSelector(state).user

export const getUsersSelector = state => userStateSelector(state).users

export const themeStateSelector = state => state.theme

export const postStateSelector = state => userStateSelector(state).post

export const getpostsStateSelector = state => userStateSelector(state).posts


