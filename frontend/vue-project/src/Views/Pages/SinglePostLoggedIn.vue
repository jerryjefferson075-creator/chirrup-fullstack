<template>
    <div class="container-fluid bg-dark">
    
        <div class="row g-3 bg-dark">
    
            <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
    
                <router-link to="/dashboard" class="DashBoardButtonsLoggedIn fw-bold">Back to Dashboard</router-link>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6">
    
                <h1 class=" text-center  display-5 banner-heading mt-0 DashBoardButtons fw-bold">Your reuqested POST!</h1>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
    
    
                <em v-if="post.loading">Loading post...</em>
    
    
    
                <div v-else>
    
    
    
                    <p><span class="fw-bold">Author: </span>{{post.author.first_name + " " + post.author.last_name }} </p>
    
                    <p><span class="fw-bold">Text: </span>{{post.text}} </p>
    
                    <p><span class="fw-bold">TimeStamp: </span>{{post.timestamp}} </p>
    
                    <div v-for="likes in post.likes">
    
                        <p><span class="fw-bold">Liked by: </span>{{likes.first_name}} {{likes.last_name}} <br> </p>
    
                    </div>
    
                    <hr />
    
                    <p>All post info (for debugging during development): </p>
    
                    <p> {{post}} </p>
    
                </div>
    
    
    
    
    
                <div v-if="error">
    
                    {{ error }}
    
                </div>
    
            </div>
    
            <div class="col-lg-3 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/editpost/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Update your Post!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
            <div class="col-lg-3 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/deletePost/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Delete Post!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
            <div class="col-lg-3 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/like/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Like Post!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
            <div class="col-lg-3 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/unlike/' + $route.params.id">
    
                        <button class="btn btn-outline-info">Unlike Post!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                <div class="text-center">
    
                    <router-link :to="'/userslog/' + post.author.user_id">
    
                        <button class="btn btn-outline-info">View this users profile!</button>
    
                    </router-link>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>
<script>
import { postService } from "../../Services/posts.service"
import { userService } from "../../Services/users.service"

export default {
    data() {
        return {
            post: {},
            error: "",
            posts: [],
            error: "",


        }
    },
    methods: {
        handleSubmit(e) { //you can create multiple of these it dosent have to be called handleSubmit(). Then create the form and add yourmethod after submit.prevent 
            this.submitted = true
            this.error = ""

            userService.logout()
                .then(result => {
                    console.log("Auth succesful")
                    this.$router.push("/")
                })
                .catch(error => {
                    this.error = error;
                    this.submitted = false;
                })
        },

    },
    created() {
        this.post.loading = true;
        postService.getSinglePost(this.$route.params.id)
            .then((post) => {
                this.post = post;
            })
            .catch(error => this.error = error);
    },
}
</script>