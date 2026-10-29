<template>
    <div class="container-fluid bg-dark">
    
        <div class="row g-3 bg-dark">
    
            <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
    
                <router-link to="/dashboard" class=" DashBoardButtonsLoggedIn fw-bold">Back to Dashboard</router-link>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6">
    
                <h1 class=" text-center  display-5 banner-heading mt-0 DashBoardButtons fw-bold">Your reuqested USER!</h1>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <em v-if="user.loading">Loading User...</em>
    
                <div v-else>
    
                    <p>FirstName: {{user.first_name}} </p>
    
                    <p>Surname: {{user.last_name}} </p>
    
                    <p class="fw-bold">FOLLOWERS</p>
    
                    <div v-for="followers in user.followers">
    
                        <p>Followers: {{followers.first_name}} {{followers.last_name}} </p>
    
                    </div>
    
                    <p class="fw-bold">FOLLOWING</p>
    
                    <div v-for="following in user.following">
    
                        <p>Following: {{following.first_name}} {{following.last_name}} </p>
    
                    </div>
    
                    <p class="fw-bold">POSTS</p>
    
                    <div v-for="posts in user.posts">
    
                        <p><span class="">POST: </span> {{posts.text}}</p>
    
                        <div v-for="likes in posts.likes">
    
                            <p><span class="">LIKED BY: </span> {{likes.first_name}} {{likes.last_name}}</p>
    
                        </div>
    
                    </div>
    
                    <hr />
    
                    <p>All post info (for debugging during development): </p>
    
                    <p> {{user}} </p>
    
                </div>
    
                <div v-if="error">
    
                    {{ error }}
    
                </div>
    
            </div>
    
            <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/follow/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Follow user!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
            <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/unfollow/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Unfollow user!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
    
    
        </div>
    
    </div>
</template>

<script>
import { postService } from "../../Services/posts.service"
import { userService } from "../../Services/users.service"
import { socialService } from "../../Services/social.service"

export default {
    data() {
        return {
            user: {},
            error: "",

        }
    },
    methods: {

    },
    created() {
        this.user.loading = true;
        socialService.getSingleUser(this.$route.params.id)
            .then((user) => {
                this.user = user;
            })
            .catch(error => this.error = error);
    }
}
</script>