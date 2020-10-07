import React, { useEffect, useState } from 'react'
import photo from '../../imgs/ava.jpg'
import {
    ModalStyled,
    OpenImage,
    InfoOpenImage,
    UserInfoOpen,
    OpenComments,
    LikesOpen,
    AddComments,
    ContainerNewAva,
    StyledFormNewAva,
    StyledFormNewPost,
    CommentStyled
} from './styled'
import { useForm } from "react-hook-form";
import like from '../../imgs/Like.png'
import likeTrue from '../../imgs/like-true.png'
import send from '../../imgs/send.png'
import Input from '../input'
import {
    getPostThunk,
    likeUserThunk,
    changeAvatarThunk,
    addNewPostThunk,
    getCommentsThunk,
    createCommentThunk,
    deleteCommentThunk
} from '../../store/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import {
    postStateSelector,
    getUserTokenSelector,
    getCurrentUserInfo,
    getCommentsSelector
} from '../../store/users/selectors'
import { getPostAction, getCommentsAction } from '../../store/users/actions'
import loading from '../../imgs/loader.gif'
import Button from '../../components/button'
import UserImg from '../../imgs/ava.png'
import basket from '../../imgs/basket.svg'





const AddPhoto = (props) => {
    const token = useSelector(getUserTokenSelector)
    const dispatch = useDispatch()
    const getBase64Image = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const [isNotTrueFormat, setFormat] = useState(false)
    const [isFileToLarge, setSize] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const [files, setFiles] = useState(null)
    const addFile = () => setFiles(1)
    const sumbitChangeAva = async (data) => {
        const file = data.file[0]
        let avatar = await getBase64Image(file)
        const user = { avatar: avatar }
        console.log(avatar)
        dispatch(changeAvatarThunk({ user: user, token: token }))
    }
    const returnToUser = () => {
        props.closeModal()
    }
    const submitNewPost = (data) => {
        const file = data.file[0]
        const formData = new FormData()
        formData.append('image', file)
        formData.append('title', data.text)
        if (file.type === 'image/jpeg' ||
            file.type === 'image/jpg' ||
            file.type === 'image/PNG'
        ) {
            setFormat(false)
            if (file.size / 1000000 > 2) {
                setSize(true)
                return
            }
            dispatch(addNewPostThunk({ formData, token, returnToUser }))
        }
        else setFormat(true)
    }
    return (

        <ModalStyled onClick={props.closeModal}>
            <div onClick={props.click}>
                {
                    props.isAva ?
                        <ContainerNewAva onSubmit={handleSubmit(sumbitChangeAva)}>
                            <StyledFormNewAva>
                                <div>
                                    <label htmlFor='file'>{files && 'Selected photo: 1' || 'Select photo'}</label>
                                    <Input
                                        name='file'
                                        type='file'
                                        placeholder='Enter photo'
                                        ref={register({ required: true })}
                                        id='file'
                                        onChange={addFile}
                                    />
                                    {errors.file && <p>Required</p>}
                                </div>
                                <Button children={'Change Avatar'} />
                            </StyledFormNewAva>
                        </ContainerNewAva>
                        :
                        <ContainerNewAva onSubmit={handleSubmit(submitNewPost)}>
                            <StyledFormNewPost>
                                <div>
                                    <label htmlFor='file'>{files && 'Selected photo: 1' || 'Select photo'}</label>
                                    <Input
                                        name='file'
                                        type='file'
                                        placeholder='Enter photo'
                                        ref={register({ required: true })}
                                        id='file'
                                        onChange={addFile}
                                    />
                                    {errors.file && <p>Required</p>}
                                    {isFileToLarge && <p>File to large</p>}
                                    {isNotTrueFormat && <p>Format must be jpeg/jpg or png</p>}
                                </div>
                                <textarea
                                    name="text"
                                    ref={register()}
                                    placeholder='Enter your title'>
                                </textarea>


                                <Button children={'Create new Post'} />
                            </StyledFormNewPost>
                        </ContainerNewAva>
                }
            </div >
            <span></span>
        </ModalStyled>
    )
}

const Comment = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    console.log(new Date(props.time))
    const deleteComment = async () => {
        dispatch(deleteCommentThunk({ commentId: props.comment.id, token: props.token, id: props.post._id }))
    }
    return (
        <CommentStyled>
            <div>
                <div>
                    <img src={props.comment.owner.avatar || UserImg} alt="" />
                </div>
            </div>
            <b>{props.comment.owner.login}:  {props.comment.owner.id === props.user.id && <img src={basket} alt='' onClick={deleteComment} />}</b>
            <p>{props.comment.text}</p>
        </CommentStyled>
    )
}

const Modal = (props) => {
    const post = { ...useSelector(postStateSelector) }
    useEffect(() => {
        dispatch(getPostThunk({ id: props.id, setLoading: setLoading }))
    }, []);
    useEffect(() => {
        post.likes && post.likes.forEach(likedUser => {
            if (likedUser._id === user.id) setLike(true)
        })
        dispatch(getCommentsThunk({ id: post._id, token: token }))
    }, [post.likes]);
    const [isLoading, setLoading] = useState(false)
    const [isLiked, setLike] = useState(false)
    const token = useSelector(getUserTokenSelector)
    const user = useSelector(getCurrentUserInfo)
    const dispatch = useDispatch()
    const comments = useSelector(getCommentsSelector)
    const { register, handleSubmit, errors } = useForm()
    console.log(comments)
    const closeModal = () => {
        dispatch(getPostAction(''))
        dispatch(getCommentsAction(''))
        props.openPost()
    }
    const click = (e) => {
        e.stopPropagation();
        return false;
    }
    const clickLike = async () => {
        setLike(!isLiked)
        dispatch(likeUserThunk({ id: props.id, token: token }))
    }
    const createComment = async (data) => {
        debugger
        dispatch(createCommentThunk({ data: { postId: props.id, text: data.text }, token: token, id: props.id }))
    }

    return (
        props.isPost ?
            <ModalStyled onClick={closeModal}>
                <div onClick={click}>
                    <OpenImage>
                        {isLoading ? <img src={loading} /> : <img src={post.imgUrl && post.imgUrl} onDoubleClick={clickLike} />}
                    </OpenImage>
                    <InfoOpenImage>
                        <UserInfoOpen>
                            <div>
                                <div>
                                    <img src={props.user && props.user.avatar || photo} alt="" />
                                </div>
                                <p>
                                    <b>{props.user && props.user.login || user.login}</b>
                                </p>

                            </div>
                            <p>{post.title}</p>
                        </UserInfoOpen>
                        <OpenComments>
                            {comments && comments.map(comment => {
                                return <Comment comment={comment} user={user} token={token} post={post} />
                            })}
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
                            <form onSubmit={handleSubmit(createComment)}>
                                <textarea
                                    placeholder='Add comment...'
                                    name='text'
                                    type='text'
                                    ref={register({ required: true })}
                                />
                                <button type="submit" value="Send" ><p>send</p></button>
                            </form>
                        </AddComments>
                    </InfoOpenImage>
                </div>
                <span></span>
            </ModalStyled>
            :
            <AddPhoto click={click} closeModal={closeModal} isAva={props.isAva} />
    )
}
export default Modal




