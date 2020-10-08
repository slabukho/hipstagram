import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import logo from '../../imgs/logo 1.svg'
import Button from '../../components/button'
import Input from '../../components/input'
import { useForm } from "react-hook-form";
import FieldContainer from './components/FieldConteiner'
import loading from '../../imgs/authLoading.gif'
import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import guide from '../../constants/modulesGuide'
import {
    FormStyled,
    AuthMain,
    AuthPicture,
    AuthStyled
} from './styled'
import {
    loginValidData,
    emailValidData,
    passwordValidData
} from '../../constants/Patterns'
import {
    loginThunk,
    registrationThunk
} from '../../store/users/thunks'



const Registration = () => {
    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const dispatch = useDispatch();
    const history = useHistory();
    const comeToLogin = () => {
        history.push(guide.notAuth.path);
    }
    const onSubmit = data => {
        dispatch(registrationThunk({ data: data, loading: setLoading, comeToLogin: comeToLogin }))
    }

    return (
        <>
            <p>Sign Up</p>

            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <FieldContainer label="Login:" error={errors.login} >
                    <Input
                        name='login'
                        type='text'
                        placeholder='Enter your Login'
                        ref={register(loginValidData)}
                    />
                </FieldContainer>
                <FieldContainer label="Email:" error={errors.email} >
                    <Input
                        name='email'
                        placeholder='Enter your Email'
                        ref={register(emailValidData)}
                    />
                </FieldContainer>
                <FieldContainer label="Password:" error={errors.password} >
                    <Input
                        name='password'
                        placeholder='Enter your Password'
                        ref={register(passwordValidData)}
                        type='password'
                    />
                </FieldContainer>
                <Button children={isLoading && <img src={loading} alt='loading...' /> || 'Sign Up'} />
            </FormStyled>
            <p>If you have account you can <Link to="/login">Login</Link></p>
        </>

    )
}

const Login = () => {
    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        dispatch(loginThunk({ data: data, loading: setLoading }))
    }

    return (
        <>
            <p>Sign In</p>

            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <FieldContainer label="Login:" error={errors.login} >
                    <Input
                        name='login'
                        type='text'
                        placeholder='Enter your Login'
                        ref={register(loginValidData)}
                    />
                </FieldContainer>
                <FieldContainer label="Password:" error={errors.password} >
                    <Input
                        name='password'
                        placeholder='Enter your Password'
                        ref={register({ required: true })}
                        type='password'
                    />
                </FieldContainer>
                <Button children={isLoading && <img src={loading} alt='loadin...' /> || 'Sign in'} />
                {}
            </FormStyled>
            <p>If you not have account you can <Link to="/registration">Registration</Link></p>
        </>
    )
}


const Auth = () => {
    return (
        <AuthMain>
            <AuthPicture />
            <AuthStyled>
                <span><img src={logo} alt="logo" /><h1>HIPSTAGRAM</h1></span>
                <Switch>
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Redirect to="/login" />
                </Switch>
            </AuthStyled>
        </AuthMain >
    )
}

export default Auth