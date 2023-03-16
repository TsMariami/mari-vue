import Home from '../views/Home.vue'
import Signin from '../views/SignIn.vue'
import Signup from '../views/SignUp.vue'
import Index from '../views/categories/index.vue'
import Create from '../views/categories/Create.vue'
import { RouterView } from 'vue-router'
import Edit from '../views/categories/Edit.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
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
    component: RouterView,
    children: [
        {
            path: 'categories',
            component: RouterView,
            children: [
                {
                    path: "",
                    name: "Categories index",
                    component: Index
                },
                {
                    path: 'create',
                    name: "Create categories",
                    component: Create
                },
                 {
                    path: ':id/edit',
                    name: "Edit categories",
                    component:  Edit,
                    props:true
                },
            ]
        },
    ]
},
]
export default routes