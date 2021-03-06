import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import { useParams } from 'react-router-dom';
import ava from '../../imgs/ava.png'
import {
    ContainerUserStyled,
    UserStyled,
    HeaderUserStyled,
    ImgAva,
    PuplicationsUser,
    Image,
    FollowingButton,
    Preloader
} from './styled'
import {
    disableScroll,
    enableScroll

} from '../../components/stopeScroll'
import Modal from '../../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserThunk, followUserThunk } from '../../store/users/thunks'
import { getUserSelector, getUserTokenSelector, getCurrentUserInfoSelector } from '../../store/users/selectors'
import loading from '../../imgs/loading.gif'

const PictureUser = (props) => {
    const openModal = () => {
        props.setPostId(props.idPost)
        props.switchModal()
    }
    return (
        <Image onClick={openModal}>
            <img src={props.img} alt="" />
        </Image>
    )
}

const UserConteiner = ({ user, setPostId, openPost }) => {
    const currentUser = { ...useSelector(getCurrentUserInfoSelector) }
    useEffect(() => {
        currentUser.following && currentUser.following.forEach(follower => {
            if (follower.id === user.id) setFollow(true)
        })
    }, [user.id]);
    const [isFollow, setFollow] = useState(false)
    const token = useSelector(getUserTokenSelector)
    const dispatch = useDispatch()
    const follow = async () => {
        dispatch(followUserThunk({ id: user.id, token: token }))
        dispatch(getUserThunk(user.id))
        setFollow(!isFollow)
    }
    return (
        <ContainerUserStyled>
            <HeaderUserStyled>
                <ImgAva>
                    <img src={user.avatar || ava} alt="" />
                </ImgAva>
                <div    >
                    <span>
                        <p><b>{user?.posts?.length}</b> posts</p>
                        <p><b>{user.followersCount && user?.followersCount} </b>followers</p>
                        <p><b>{user.followingsCount && user?.followingsCount} </b>followings</p>
                    </span>
                    {isFollow ? <FollowingButton children='unfollow' onClick={follow} /> : <Button children='follow' onClick={follow} />}
                    <p>{user.firstName} {user.lastName}</p>
                </div>
            </HeaderUserStyled>
            <hr />
            <PuplicationsUser>
                {user?.posts?.slice(0).reverse().map(post => {
                    return <PictureUser img={post.imgUrl} idPost={post._id} setPostId={setPostId} switchModal={openPost} key={post._id} />
                })}
                {!user?.posts?.length && <p>Not puplications yet</p>}
            </PuplicationsUser>
        </ContainerUserStyled>
    )
}




const SearchedUser = (props) => {
    useEffect(() => {
        dispatch(getUserThunk({ id: id, setLoading: setLoading }))
    }, []);
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { id } = useParams();
    let user = { ...useSelector(getUserSelector) }
    const [postId, setPostId] = useState(null)
    const [isOpen, setOpen] = useState(false)
    isOpen && disableScroll()
    !isOpen && enableScroll()
    const openPost = () => setOpen(!isOpen)
    return (

        <>
            <Header headerText='User' setThem={props.setThem} theme={props.theme} user={user} />
            {isLoading && <Preloader><img src={loading} /> </Preloader> || <UserStyled >
                <UserConteiner openPost={openPost} setPostId={setPostId} user={user} />
                {isOpen && <Modal openPost={openPost} isOpen={isOpen} id={postId} user={user} isPost />}
            </UserStyled>}
        </>

    )
}



export default SearchedUser



