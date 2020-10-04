import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import { Link } from 'react-router-dom';
import photo from '../../imgs/ava.jpg'
import ava from '../../imgs/ava.png'
import {
    ContainerUserStyled,
    UserStyled,
    HeaderUserStyled,
    ImgAva,
    PuplicationsUser,
    Plus,
    Image
} from './styled'
import {
    disableScroll,
    enableScroll

} from '../../components/stopeScroll'
import Modal from '../../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoThunk, getUserThunk } from '../../store/users/thunks'
import { getUserTokenSelector, getCurrentUserInfo, getUserSelector, getSelectedUserSelector, getUsersSelector } from '../../store/users/selectors'
import guide from '../../constants/modulesGuide'


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

const UserConteiner = ({ user, setPostId, switchModal }) => {
    console.log(user.followers)
    return (
        <ContainerUserStyled>
            <HeaderUserStyled>
                <ImgAva>
                    <img src={user.avatar || ava} alt="" />
                </ImgAva>
                <div    >
                    <span>
                        <p><b>{user.posts && user.posts.length}</b> posts</p>
                        <p><b>{user.followers && user.followers.length} </b>followers</p>
                        <p><b>{user.following && user.following.length} </b>followings</p>
                    </span>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
            </HeaderUserStyled>
            <Link to={guide.auth.newPost.path}><Plus /></Link>
            <hr />
            <PuplicationsUser>
                {user.posts && user.posts.slice(0).reverse().map(post => {
                    return <PictureUser img={post.imgUrl} idPost={post._id} setPostId={setPostId} switchModal={switchModal} key={post._id} />
                })}
                {!user.posts && <p>Not puplications yet</p>}
            </PuplicationsUser>
        </ContainerUserStyled>
    )
}




const User = (props) => {

    const dispatch = useDispatch()
    const token = useSelector(getUserTokenSelector)
    useEffect(() => {
        dispatch(getUserInfoThunk({ token: token }))
    }, []);
    const user = { ...useSelector(getCurrentUserInfo) }
    const [postId, setPostId] = useState(null)
    const [isOpen, setOpen] = useState(false)
    isOpen && disableScroll()
    !isOpen && enableScroll()
    const switchModal = () => setOpen(!isOpen)
    return (
        (<>
            <Header headerText='User' setThem={props.setThem} theme={props.theme} user={user} />
            <UserStyled >
                <UserConteiner switchModal={switchModal} setPostId={setPostId} user={user} />
                {isOpen && <Modal switchModal={switchModal} isOpen={isOpen} id={postId} />}
            </UserStyled>
        </>
        )
    )
}



export default User



