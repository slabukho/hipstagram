import React from 'react'
import {
    HeaderStyled,
    HeaderTextStyled,
    IconsCOntatiner,
    UserIcon,
    SearchIcon,
    GoToSearch
} from './styled'
import logout_icon from '../../imgs/logout_icon 1.png'
import settingImg from '../../imgs/settings.svg'
import news from '../../imgs/home.png'
import { logoutThunk, getUsersByLoginThunk } from '../../store/users/thunks'
import { getUserTokenSelector } from '../../store/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import guide from '../../constants/modulesGuide'
import { DebounceInput } from 'react-debounce-input';




const Header = ({ search, user, settings, feed }) => {
    const token = useSelector(getUserTokenSelector)
    const serchUsers = async login => {
        dispatch(getUsersByLoginThunk({ login: login, token: token }))
    }

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutThunk())
    }

    return (
        <HeaderStyled>
            {search && <DebounceInput
                minLength={1}
                debounceTimeout={1000}
                onChange={event => serchUsers(event.target.value)}
            />}
            {search && <SearchIcon />}
            {!search && <Link to={guide.auth.search.path} ><GoToSearch /></Link>}
            <HeaderTextStyled>{!search && user && user.login || settings && 'Setting' || feed && 'Feed'}</HeaderTextStyled>
            <IconsCOntatiner>
                <Link to={guide.auth.feed.path}><img src={news} alt="" /></Link>
                <Link to={guide.auth.settings.path}><img src={settingImg} alt="" /></Link>
                <Link to={guide.auth.user.path} ><UserIcon /></Link>
                <img src={logout_icon} onClick={logout} alt='Logout' />
            </IconsCOntatiner>
        </HeaderStyled >
    )
}
export default Header