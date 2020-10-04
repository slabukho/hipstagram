import Auth from '../modules/auth'
import Search from '../modules/searchUsers'
import User from '../modules/User'
import SearchedUser from '../modules/User/SearchedUser'
import Settings from '../modules/settings'
import NewPost from '../modules/newPost'
import Feed from '../modules/feed'


export default {
    auth: {
        search: {
            path: '/users-search',
            component: Search
        },
        user: {
            path: '/current',
            component: User
        },
        userSearched: {
            path: '/current',
            component: SearchedUser
        },
        settings: {
            path: '/settings',
            component: Settings
        },
        newPost: {
            path: '/newPost',
            component: NewPost
        },
        feed: {
            path: '/feed',
            component: Feed
        }
    },
    notAuth: {
        path: '/auth',
        component: Auth
    }
}