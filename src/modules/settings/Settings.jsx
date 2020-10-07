import React, { useRef } from 'react'
import {
    StyledSettings,
    SliderSwitchTheme,
    StyledPasswordChangeForm,
    StyledUserChangeForm
} from './styled'
import Header from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserInfo, getUserTokenSelector } from '../../store/users/selectors'
import Input from '../../components/input'
import Button from '../../components/button'
import { changeThemeAction } from '../../store/users/actions'
import { useForm } from "react-hook-form";
import { changeUserThunk, updateUserPasswordThunk } from '../../store/users/thunks'
import { HashLink as Link } from 'react-router-hash-link';
import {

    emailValidData,
} from '../../constants/Patterns'



const ChangeUserInfo = ({ user, dispatch, token }) => {
    const { register, handleSubmit } = useForm()
    const onSubmitChangeInfo = user => {
        debugger
        dispatch(changeUserThunk({ user, token }))
    }
    return (
        <>
            <p id='name'>Change Info:</p>
            <StyledUserChangeForm onSubmit={handleSubmit(onSubmitChangeInfo)} >
                <label>First name:</label>

                <Input
                    name='firstName'
                    type='text'
                    placeholder='Enter new Login'
                    ref={register()}
                    defaultValue={user.firstName}
                />
                <label>Last name:</label>

                <Input
                    name='lastName'
                    type='text'
                    placeholder='Enter new Login'
                    ref={register()}
                    defaultValue={user.lastName}
                />
                <Button children={'Change Info'} />
            </StyledUserChangeForm>
        </>
    )
}

const ChangeUserLogin = ({ user, dispatch, token }) => {
    const { register, handleSubmit } = useForm()
    const onSubmitChangeInfo = user => {
        dispatch(changeUserThunk({ user, token }))
    }
    return (
        <>
            <p id='login'>Change Login:</p>
            <StyledUserChangeForm onSubmit={handleSubmit(onSubmitChangeInfo)} >
                <label>Login:</label>
                <Input
                    name='login'
                    type='text'
                    placeholder='Enter new Login'
                    ref={register()}
                    defaultValue={user.login}
                />
                <Button children={'Change Login'} />
            </StyledUserChangeForm>
        </>
    )
}

const ChangeUserEmail = ({ user, dispatch, token }) => {
    const { register, handleSubmit } = useForm()
    const onSubmitChangeInfo = user => {
        dispatch(changeUserThunk({ user, token }))
    }
    return (
        <>
            <p id='email'>Change Email:</p>
            <StyledUserChangeForm onSubmit={handleSubmit(onSubmitChangeInfo)} >
                <label>Email:</label>
                <Input
                    name='email'
                    type='text'
                    placeholder='Enter new Email'
                    ref={register(emailValidData)}
                    defaultValue={user.email}
                />
                <Button children={'Change Email'} />
            </StyledUserChangeForm>
        </>
    )
}


const ChangePasswordUserForm = ({ dispatch, token }) => {
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmitChangePassword = userData => {
        debugger
        dispatch(updateUserPasswordThunk({ userData, token }))
    }
    const password = useRef({});
    password.current = watch("password", "");
    return (
        <>
            <p id='password'>Change password:</p>
            <StyledPasswordChangeForm onSubmit={handleSubmit(onSubmitChangePassword)} >
                <label>New Password:</label>
                <Input
                    name='password'
                    type='password'
                    placeholder='Enter previous password'
                    ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        },
                        maxLength: {
                            value: 18,
                            message: "Password must have at least 18 characters"
                        }
                    })}

                />
                {errors.password && <p>{errors.password.message}</p>}

                <label>Confirm Password:</label>

                <Input
                    name='confirmPassword'
                    type='password'
                    placeholder='Enter new password'
                    ref={register({
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <Button children={'Change password'} />
            </StyledPasswordChangeForm>
        </>

    )
}


const Settings = () => {
    const token = useSelector(getUserTokenSelector)
    const dispatch = useDispatch()
    const changeTheme = () => {
        dispatch(changeThemeAction())
    }
    const user = { ...useSelector(getCurrentUserInfo) }
    return (
        <>
            <Header settings />

            <StyledSettings>
                <div>
                    <Link to='/settings/#name'>Name⇩</Link >
                    <Link to='/settings/#password'>Password⇩</Link >
                    <Link to='/settings/#login'>Login⇩</Link >
                    <Link to='/settings/#email'>Email⇩</Link >
                </div>
                <hr />
                <p>Dark Theme:</p>
                <div onClick={changeTheme}>
                    <SliderSwitchTheme >
                        <span></span>
                    </SliderSwitchTheme >
                </div>
                <hr />
                <ChangeUserInfo dispatch={dispatch} token={token} user={user} />
                <hr />
                <ChangeUserEmail dispatch={dispatch} token={token} user={user} />
                <hr />
                <ChangePasswordUserForm dispatch={dispatch} token={token} />
                <hr />
                <ChangeUserLogin dispatch={dispatch} token={token} user={user} />
            </StyledSettings>
        </>
    )
}

export default Settings