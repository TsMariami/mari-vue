import Home from '../views/Home.vue'
import account from '../views/Account.vue'
import info from '../views/Info.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/categories/index.vue'
import Create from '../views/categories/Create.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
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

    ]

},
{
    path: '/signup',
    name: "signup",
    component: Signup
},
{
    path: '/signin',
    name: 'signin',
    component: Signin,

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
        },
    ]
},
{
    path: '/create',
    name: "create",
    component: Create
},




]
export default routes