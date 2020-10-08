import axios from "axios"

export const url = 'https://hipstagram-api.herokuapp.com'


export const registrationFetch = async userData => {
    await axios.post(url + '/auth/registration', userData)

}

export const loginFetch = async userData => {
    const { data } = await axios.post(url + '/auth/login', userData);
    return data
}


export const updatePasswordFetch = async ({ userData, token }) => {
    await axios.post(url + '/auth/updatePassword', userData, { headers: { "Authorization": token } });
}


export const addNewPostFetch = async ({ formData, token }) => {
    await axios.post(url + '/posts', formData, { headers: { "Authorization": token } });

}

export const currentFetch = async token => {
    const { data } = await axios.get(url + '/users/current', { headers: { "Authorization": token } });
    return data
}

export const getPostByIdFetch = async id => {
    const { data } = await axios.get(url + '/posts/' + id);
    return data
}

export const getUsersFetch = async (token) => {
    const { data } = await axios.get(url + '/users', { headers: { "Authorization": token } });
    return data
}

export const getUserByIdFetch = async id => {
    const { data } = await axios.get(url + '/users/' + id)
    return data
}

export const updateUserFetch = async ({ user, token }) => {
    const { data } = await axios.patch(url + '/users/current', user, { headers: { "Authorization": token } });
    return data
}

export const updateLoginFetch = async ({ login, token }) => {
    const { data } = await axios.patch(url + '/users/current', login, { headers: { "Authorization": token } });
    return data
}

export const updateAvatarFetch = async ({ user, token }) => {
    const { data } = await axios.patch(url + '/users  ', user, {
        headers: { "Authorization": token },
        'Access-Control-Allow-Origin': '*'
    });
    return data
}

export const getUsersByLoginFetch = async ({ login, token }) => {
    const { data } = await axios.get(url + `/users?search=${login}`, { headers: { "Authorization": token } });
    return data
}

export const followUserFetch = async ({ id, token }) => {
    await axios.get(url + '/users/follow/' + id, { headers: { "Authorization": token } })
}

export const getFeedFetch = async (token) => {
    const { data } = await axios.get(url + '/posts/feed', { headers: { "Authorization": token } })
    return data
}

export const likeFetch = async ({ id, token }) => {
    await axios.get(url + '/posts/like/' + id, { headers: { "Authorization": token } })
}

export const getCommentByIdFetch = async ({ id, token }) => {
    const { data } = await axios.get(url + '/comments/' + id, { headers: { "Authorization": token } })
    return data
}

export const createCommentFetch = async ({ data, token }) => {

    await axios.post(url + '/comments', data, { headers: { "Authorization": token } })
}


export const deleteCommentFetch = async ({ commentId, token }) => {
    await axios.delete(url + '/comments/' + commentId, { headers: { "Authorization": token } })
}