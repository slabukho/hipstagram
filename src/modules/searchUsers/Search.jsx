import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import noUsers from '../../imgs/noUsers.png'
import {
    UsersStyled,
    UserSerchStyled,
    UserSerchInnerStyled,
    NoUsersStyled,
    NoUsersInnerStyled,
} from './styled'
import { FollowingButton } from '../User/styled'
import { getUsersThunk, getUserThunk, followUserThunk } from '../../store/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersSelector, getUserTokenSelector, getCurrentUserInfo } from '../../store/users/selectors'
import { selectIdUserAction, getUserAction } from '../../store/users/actions'
import UserImg from '../../imgs/ava.png'
import { Link } from 'react-router-dom';
import guide from '../../constants/modulesGuide'


const User = ({ user, currentUser, selectedUser }) => {
    const [isFollow, setFollow] = useState(false)
    console.log(currentUser)
    useEffect(() => {
        currentUser.following.forEach(follower => {
            if (follower.id === user._id) setFollow(true)
        })
    }, []);
    const token = useSelector(getUserTokenSelector)
    const follow = async () => {
        dispatch(followUserThunk({ id: user._id, token: token }))
        dispatch(getUserThunk(user._id))
        debugger
        setFollow(!isFollow)
    }
    const dispatch = useDispatch()
    return (
        <UserSerchStyled>
            <UserSerchInnerStyled>
                <Link to={`${guide.auth.userSearched.path}/${user._id}`} >
                    <img src={user.avatar || UserImg} alt='avatar' onClick={selectedUser} />
                </Link>
                <Link to={`${guide.auth.userSearched.path}/${user._id}`}>
                    <p onClick={selectedUser}>
                        {user.login}
                    </p>
                </Link>
            </UserSerchInnerStyled>
            {isFollow ? <FollowingButton children='unfollow' onClick={follow} /> : <Button children='Subscribe' onClick={follow} />}
        </UserSerchStyled>
    )
}

const NoUsers = () => {
    return (
        <NoUsersStyled>
            <NoUsersInnerStyled>
                <img src={noUsers} alt="noUsers" />
                <p>
                    Users not found
                </p>
            </NoUsersInnerStyled>
        </NoUsersStyled>
    )
}


const Search = (props) => {
    const dispatch = useDispatch()
    dispatch(getUserAction(''))
    const token = useSelector(getUserTokenSelector)
    const currentUser = { ...useSelector(getCurrentUserInfo) }
    useEffect(() => {
        dispatch(getUserAction(currentUser))
        dispatch(getUsersThunk(token))
    }, []);
    const users = [...useSelector(getUsersSelector)]
    users.forEach((person, i) => {
        person._id === currentUser.id && users.splice(i, 1)
    })
    return (
        users ?
            <>
                <Header search={true} headerText='Search' setThem={props.setThem} theme={props.theme} />
                <UsersStyled>
                    {users.map(user => {
                        const selectedUser = () => {
                            dispatch(selectIdUserAction(user._id))
                        }
                        return <User user={user} key={user._id} selectedUser={selectedUser} currentUser={currentUser} />
                    })}
                </UsersStyled>:
            </> :
            <>
                <Header search={true} headerText='Search' setThem={props.setThem} theme={props.theme} />
                <NoUsers />
            </>
    )
}
export default Search