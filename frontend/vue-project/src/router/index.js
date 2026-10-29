import { createRouter, createWebHistory } from 'vue-router';
import { ifAuthenticated } from '../middleware/auth'

import Login from "../Views/Pages/Login.vue"
import Home from "../Views/Pages/Home.vue"
import Dashboard from "../Views/Pages/Dashboard.vue"
import NotFound from "../Views/Pages/NotFound.vue"
import SinglePost from "../Views/Pages/SinglePost.vue"
import SingleUser from "../Views/Pages/SingleUser.vue"
import SinglePostLoggedIn from "../Views/Pages/SinglePostLoggedIn.vue"
import SingleUserLoggedIn from "../Views/Pages/SingleUserLoggedIn.vue"
import Like from "../Views/Pages/Like.vue"
import UnLike from "../Views/Pages/UnLike.vue"
import SingleUserForSearch from "../Views/Pages/SingleUserForSearch.vue"
import deletePost from "../Views/Pages/DeletedPost.vue"
import editPost from "../Views/Pages/PostEditted.vue"
import followuser from "../Views/Pages/followuser.vue"
import unfollowuser from "../Views/Pages/unfollowuser.vue"
import Navigation from "../Views/Components/navigation.vue"
import CreateAccount from "../Views/Pages/CreateAccount.vue"


const routes = [
    {path: "/", component: Home },
    {path: "/create", component: CreateAccount },
    {path: "/login", component: Login},
    {path: "/posts/:id", component: SinglePost},
    {path: "/users/:id", component: SingleUser},
    {path: "/postslog/:id", component: SinglePostLoggedIn},
    {path: "/userslog/:id", component: SingleUserLoggedIn},
    {path: "/like/:id", component: Like},
    {path: "/unlike/:id", component: UnLike},
    {path: "/deletePost/:id", component: deletePost},
    {path: "/editpost/:id", component: editPost},
    {path: "/follow/:id", component: followuser},
    {path: "/nav", component: Navigation },
    {path: "/unfollow/:id", component: unfollowuser},
    {path: "/Searchuser/:id", component: SingleUserForSearch},
    {path: "/dashboard", component: Dashboard, beforeEnter: ifAuthenticated},
    {path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;