import React, { useRef, useState } from 'react'
import Header from '../../components/header'
import { ContainerNewPostStyled, StyledFormNewPost } from './styled'
import Input from '../../components/input';
import { useForm } from "react-hook-form";
import Button from '../../components/button'
import { addNewPostThunk } from '../../store/users/thunks'
import { getUserTokenSelector, getCurrentUserInfo } from '../../store/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import guide from '../../constants/modulesGuide'
import loading from '../../imgs/loading.gif'


const NewPost = () => {
    const user = { ...useSelector(getCurrentUserInfo) }
    const token = useSelector(getUserTokenSelector)
    const dispatch = useDispatch()
    const [files, setFiles] = useState(null)
    const [isFileToLarge, setSize] = useState(false)
    const [isNotTrueFormat, setFormat] = useState(false)
    const [isLoadingPhoto, setLoading] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory();
    const returnToUser = () => {
        history.push(guide.auth.user.path);
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
            dispatch(addNewPostThunk({ formData, token, returnToUser, setLoading }))
        }
        else setFormat(true)

    }
    const addFile = () => setFiles(1)
    return (
        <>
            <Header user={user} />
            <ContainerNewPostStyled onSubmit={handleSubmit(submitNewPost)}>
                <StyledFormNewPost>
                    <div>
                        <label htmlFor='file'>{files && 'Selected fphoto: 1' || 'Select photo'}</label>
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
                    {/* <Input
                        name='text'
                        type='text'
                        placeholder='Enter your title'
                        ref={register()}
                    /> */}
                    <Button children={isLoadingPhoto && <img src={loading} /> || 'Create new Post'} />
                </StyledFormNewPost>
            </ContainerNewPostStyled>
        </>
    )
}

export default NewPost
