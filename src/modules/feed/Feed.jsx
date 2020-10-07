import React, { useEffect, useState } from 'react'
import {
    ContainerFeedStyled,
    PostStyled,

} from './styled'
import Header from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserInfo, getUserTokenSelector, getpostsStateSelector } from '../../store/users/selectors'
import like from '../../imgs/Like.png'
import likeTrue from '../../imgs/like-true.png'
import { getPostsThunk, likeUserThunk } from '../../store/users/thunks'
import { AddComments } from '../../components/Modal/styled'
import send from '../../imgs/send.png'



const Post = ({ post }) => {
    const user = useSelector(getCurrentUserInfo)

    useEffect(() => {
        post.likes && post.likes.forEach(likedUser => {
            if (likedUser._id === user.id) setLike(true)
        })
    }, [post.likes]);
    const token = useSelector(getUserTokenSelector)
    const dispatch = useDispatch()
    const [isLiked, setLike] = useState(false)
    const clickLike = async () => {
        setLike(!isLiked)
        dispatch(likeUserThunk({ id: post._id, token: token }))
    }
    return (
        <>
            <PostStyled>
                <img src={post.imgUrl} alt=''
                    onDoubleClick={clickLike}
                />
                <div>
                    <div>
                        <img src={isLiked ? likeTrue : like} alt="like"
                            onClick={clickLike}
                        />
                        <img src={send} alt="send" />
                        {post.likes && post.likes.length ? 'Likes ' : ''} <b>{post.likes && post.likes.length ? post.likes[0].login : 'no one did not like'}</b> {post.likes && post.likes.length > 1 ? <p>and</p> : ''} <b>{post.likes && post.likes.length > 1 ? post.likes.length - 1 : ''}</b> {post.likes && post.likes.length > 1 ? <p>other...</p> : ''}
                    </div>
                    <div>
                        <p>{post.title}</p>
                    </div>
                    <hr />
                    <AddComments>
                        <form action="">
                            <textarea placeholder='Add comment...' />
                            <button type="submit" value="Send" ><p>send</p></button>
                        </form>
                    </AddComments>
                </div>
            </PostStyled>

        </>
    )
}


const Feeds = () => {
    useEffect(() => {
        dispatch(getPostsThunk(token))
    }, []);
    const user = { ...useSelector(getCurrentUserInfo) }
    const dispatch = useDispatch();
    const token = useSelector(getUserTokenSelector)
    const posts = useSelector(getpostsStateSelector)
    console.log(posts)
    return (
        <>
            <Header feed />
            <ContainerFeedStyled>
                {posts && posts.slice(0).reverse().map(post => {
                    return <Post post={post} key={post._id} />
                })}
            </ContainerFeedStyled>
        </>
    )
}

export default Feeds