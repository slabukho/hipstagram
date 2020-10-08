export const userStateSelector = state => state.user

export const getCurrentUserSelector = state => userStateSelector(state).currentUser

export const getSelectedUserSelector = state => userStateSelector(state).selectedUserId

export const getUserSelector = state => userStateSelector(state).selectedUser

export const getUserTokenSelector = state => getCurrentUserSelector(state).accessToken

export const getCurrentUserIsAuthSelector = state => getCurrentUserSelector(state).isAuth

export const getCurrentUserInfoSelector = state => userStateSelector(state).user

export const getCommentsSelector = state => userStateSelector(state).comments

export const getUsersSelector = state => userStateSelector(state).users

export const themeStateSelector = state => state.theme

export const postStateSelector = state => userStateSelector(state).post

export const getpostsStateSelector = state => userStateSelector(state).posts


