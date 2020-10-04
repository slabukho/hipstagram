import React, { useEffect, useState } from 'react'
import photo from '../../imgs/ava.jpg'
import {
    ModalStyled,
    OpenImage,
    InfoOpenImage,
    UserInfoOpen,
    OpenComments,
    LikesOpen,
    AddComments
} from './styled'
import like from '../../imgs/Like.png'
import likeTrue from '../../imgs/like-true.png'
import send from '../../imgs/send.png'
import Input from '../input'
import { getPostThunk, likeUserThunk } from '../../store/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { postStateSelector, getUserTokenSelector, getCurrentUserInfo } from '../../store/users/selectors'
import { getPostAction } from '../../store/users/actions'
import loading from '../../imgs/loader.gif'


const Modal = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [isLiked, setLike] = useState(false)
    const token = useSelector(getUserTokenSelector)
    const user = useSelector(getCurrentUserInfo)
    const dispatch = useDispatch()
    const post = { ...useSelector(postStateSelector) }
    console.log(user.id)
    useEffect(() => {
        dispatch(getPostThunk({ id: props.id, setLoading: setLoading }))
    }, []);
    useEffect(() => {
        post.likes && post.likes.forEach(likedUser => {
            if (likedUser._id === user.id) setLike(true)
        })
    }, [post.likes]);
    const closeModal = () => {
        dispatch(getPostAction(''))
        props.switchModal()
    }
    const click = (e) => {
        e.stopPropagation();
        return false;
    }
    const clickLike = async () => {
        setLike(!isLiked)
        dispatch(likeUserThunk({ id: props.id, token: token }))
    }
    console.log(post.likes && post.likes.length)
    return (
        <ModalStyled onClick={closeModal}>
            <div onClick={click}>
                <OpenImage>
                    {isLoading ? <img src={loading} /> : <img src={post.imgUrl && post.imgUrl} onDoubleClick={clickLike} />}
                </OpenImage>
                <InfoOpenImage>
                    <UserInfoOpen>
                        <div>
                            <img src={photo} alt="" />
                        </div>
                        <p>
                            User
                        </p>
                        <span>
                            Follow
                        </span>
                    </UserInfoOpen>
                    <OpenComments>
                        <div>
                            <div>
                                <img src={photo} alt="" />
                            </div>
                            <p>
                                <b>user</b> {post.title}
                            </p>
                        </div>
                    </OpenComments>

                    <LikesOpen>
                        <span>
                            <img src={isLiked ? likeTrue : like} alt="like"
                                onClick={clickLike}
                            />
                            <img src={send} alt="send" />
                        </span>
                        <p>
                            {post.likes && post.likes.length ? 'Likes' : ''} <b>{post.likes && post.likes.length ? post.likes[0].login : 'no one did not like'}</b> {post.likes && post.likes.length > 1 ? 'and' : ''} <b>{post.likes && post.likes.length > 1 ? post.likes.length - 1 : ''}</b> {post.likes && post.likes.length > 1 ? 'other...' : ''}
                        </p>
                    </LikesOpen>
                    <AddComments>
                        <Input placeholder='Add comment...' />
                        <p>Send</p>
                    </AddComments>
                </InfoOpenImage>
            </div>
            <span></span>
        </ModalStyled>
    )
}
export default Modal




