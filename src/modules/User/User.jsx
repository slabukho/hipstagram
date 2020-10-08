import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import ava from '../../imgs/ava.png'
import plus from '../../imgs/plus.svg'
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
import { getUserInfoThunk } from '../../store/users/thunks'
import { getUserTokenSelector, getCurrentUserInfoSelector } from '../../store/users/selectors'


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

const UserConteiner = ({ user, setPostId, openPost, openAddphoto, openAddPost }) => {
    return (
        <ContainerUserStyled>
            <HeaderUserStyled>
                <ImgAva>
                    <div onClick={openAddphoto}>
                        <img src={plus} alt="" />
                    </div>
                    <img src={user.avatar || ava} alt="" />
                </ImgAva>
                <div    >
                    <span>
                        <p><b>{user?.posts?.length}</b> posts</p>
                        <p><b>{user?.followers?.length} </b>followers</p>
                        <p><b>{user?.following?.length} </b>followings</p>
                    </span>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
            </HeaderUserStyled>
            <Plus onClick={openAddPost} />
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




const User = (props) => {
    const dispatch = useDispatch()
    const token = useSelector(getUserTokenSelector)
    useEffect(() => {
        dispatch(getUserInfoThunk({ token: token }))
    }, []);
    const user = { ...useSelector(getCurrentUserInfoSelector) }
    const [isPost, setPost] = useState(false)
    const [postId, setPostId] = useState(null)
    const [isOpen, setOpen] = useState(false)
    const [isAva, setIsAva] = useState(false)
    isOpen && disableScroll()
    !isOpen && enableScroll()
    const openPost = () => {
        setPost(true)
        setOpen(!isOpen)
    }
    const openAddphoto = () => {
        setOpen(!isOpen)
        setPost(false)
        setIsAva(true)
    }
    const openAddPost = () => {
        setOpen(!isOpen)
        setPost(false)
        setIsAva(false)
        console.log('dsad')
    }
    return (
        (<>
            <Header headerText='User' setThem={props.setThem} theme={props.theme} user={user} />
            <UserStyled >
                <UserConteiner openPost={openPost} openAddphoto={openAddphoto} setPostId={setPostId} user={user} setPost={setPost} setIsAva={setIsAva} openAddPost={openAddPost} />
                {isOpen && <Modal openPost={openPost} isOpen={isOpen} id={postId} isPost={isPost} isAva={isAva} />}
            </UserStyled>
        </>
        )
    )
}



export default User



