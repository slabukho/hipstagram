import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import guide from '../../constants/modulesGuide'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getCurrentUserIsAuth } from '../../store/users/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { ToastError } from '../../components/toast'
import loading from '../../imgs/loading.gif'
import { getUserTokenSelector } from '../../store/users/selectors'
import { getUserInfoThunk } from '../../store/users/thunks'
import { Preloader } from '../../modules/User/styled'


const Authorization = () => {
    return (
        <Switch>
            <Route exact path={guide.auth.user.path} component={guide.auth.user.component} />
            <Route path={guide.auth.search.path} component={guide.auth.search.component} />
            <Route path={`${guide.auth.user.path}/:id`} component={guide.auth.userSearched.component} />
            <Route path={guide.auth.settings.path} component={guide.auth.settings.component} />
            <Route path={guide.auth.feed.path} component={guide.auth.feed.component} />
            <Redirect to={guide.auth.feed.path} />
        </Switch>
    )

}


const Application = () => {
    const isAuth = useSelector(getCurrentUserIsAuth)
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)
    const token = useSelector(getUserTokenSelector)
    useEffect(() => {
        const getUser = async () => {
            dispatch(getUserInfoThunk({ token: token, loader: setLoading }))
        }
        getUser()
    }, []);
    return (
        isLoading ? (<Preloader>
            <img src={loading} alt="" />
        </Preloader>) :
            (<Layout >
                {isAuth ? <Authorization /> : <guide.notAuth.component />}
                <ToastError message='qwerty' />
            </Layout>)
    )
}

export default Application