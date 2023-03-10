import Home from '../views/Home.vue'
import Shorts from '../views/shorts.vue'
import video from '../views/video.vue'
import Subscriptions from '../views/subscriptions.vue'
import Library from '../views/Library.vue'
import history from '../views/history.vue'
import trending from '../views/trending.vue'
import music from '../views/music.vue'
import gaming from '../views/gaming.vue'
import sports from '../views/sports.vue'
import youTubeMusic from '../views/youTubeMusic.vue'
import youTubeKids from '../views/youTubeKids.vue'
import settings from '../views/settings.vue'
import help from '../views/help.vue'
import feedback from '../views/feedback.vue'
import browsechannels from '../views/browsechannels.vue'
import reporthistory from '../views/reporthistory.vue'
import youTubeTV from '../views/youTubeTV.vue'
import account from '../views/Account.vue'
import info from '../views/Info.vue'
import update from '../views/Update.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Userinfo from '../views/Userinfo.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/shorts',
    name: 'Shorts',
    component: Shorts
},
{
    path: '/video',
    name: 'video',
    component: video
},
{
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions
},
{
    path: '/library',
    name: 'Library',
    component: Library
},
{
    path: '/history',
    name: 'History',
    component: history
},
{
    path: '/trending',
    name: 'Trending',
    component: trending
},
{
    path: '/music',
    name: 'Music',
    component: music
},
{
    path: '/gaming',
    name: 'Gaming',
    component: gaming
},
{
    path: '/sports',
    name: 'Sports',
    component: sports
},
{
    path: '/browsechannels',
    name: 'Browse channels',
    component: browsechannels
},
{
    path: '/youTubeTV',
    name: 'YouTube TV',
    component: youTubeTV
},
{
    path: '/youTubeMusic',
    name: 'YouTube Music',
    component: youTubeMusic
},
{
    path: '/youTubeKids',
    name: 'YouTube Kids',
    component: youTubeKids
},
{
    path: '/settings',
    name: 'Settings',
    component: settings
},
{
    path: '/reporthistory',
    name: 'Report history',
    component: reporthistory
},
{
    path: '/help',
    name: 'Help',
    component: help
},
{
    path: '/feedback',
    name: 'Send feedback',
    component: feedback
},
{
    path: '/account',
    name: 'accountinfo',
    component: account,
    children: [
        {
            path: 'accountinfo',
            name: "information",
            component: info
        },
        {
            path: 'updateinfo',
            name: "update",
            component: update
        },

    ]

},
{
    path: '/signin',
    name: 'signin',
    component: Signin,

},
{
    path: '/signup',
    name: "signup",
    component: Signup
},
{
    path: '/dashboard',
    name: "dashboard",
    component: Dashboard,
    children: [
        {
            path: 'users',
            name: "users",
            component: Users,
            children: [
                {
                    path: 'userinfo',
                    name: "userinfo",
                    component: Userinfo
                },
            ]
        },
    ]
},





]
export default routes