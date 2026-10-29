<template>
    <div class="container-fluid bg-dark">
    
        <div class="row g-3">
    
            <div class="col-lg-12 col-md-6 col-sm-6">
    
                <h1 class="text-light text-center  display-5 banner-heading mt-0 ">Hello and welcome to your account!</h1>
    
            </div>
    
            <div class="col-lg-6 col-md-6 col-sm-6">
    
                <form @submit.prevent="CreatePost">
    
                    <h1 class="text-center  DashBoardButtons">Create a Post!</h1>
    
                    <h1 class="text-center  DashBoardButtons">{{PostCreated}}</h1>
    
                    <div class="input-group">
    
                        <span class="input-group-text">Your Post</span>
    
                        <textarea name="" class="form-control" id="" cols="30" rows="3" v-model="text"></textarea>
    
                    </div>
    
                    <div class="text-center">
    
                        <button class="btn btn-outline-info text-light">Submit</button>
    
                    </div>
    
                </form>
    
            </div>
    
            <div class="col-lg-6 col-md-6 col-sm-6">
    
                <h1 class="text-center DashBoardButtons">Logout</h1>
    
                <form @submit.prevent="Logout">
    
                    <div class="text-center">
    
                        <button class="btn btn-outline-info text-light">Logout</button>
    
                    </div>
    
                </form>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6">
    
                <p class="text-center fw-bold" style="color: rgb(202, 202, 116);">Your feed from you and all your followers! </p>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6 ">
    
                <em v-if="loading">Loading posts... Refresh the page if noting is shown!</em>
    
                <ul class="" style="list-style-type: none;" v-if="posts.length">
    
                    <li v-for="post in posts" :key="post.post_id">
    
                        <router-link :to="'/postslog/' + post.post_id" style="text-decoration: none">
    
                            <p class=" feedtext mt-2 text-center" style="color: rgb(202, 202, 116);">{{post.author.username}} <br> POST: {{post.text}}</p>
    
                        </router-link>
    
                        <div v-for="likes in post.likes">
    
                            <p class="feedtext text-center" style="color: rgb(202, 202, 116);">Liked by: {{likes.username}} </p>
    
                        </div>
    
                    </li>
    
                </ul>
    
                <div v-if="error">
    
                    {{error}}
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
import { userService } from "../../Services/users.service"
import { postService } from "../../Services/posts.service"
import { feedService } from "../../Services/feed.service"
export default {
    data() {
        return {
            submitted: false,
            text: "",
            posts: [],
            error: "",
            loading: true,
            submitted: false,
            PostCreated: "",

        }
    },
    methods: {
        Logout(e) {
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

        CreatePost(a) {
            this.submitted = true
            this.error = ""


            const { text } = this



            postService.CreatePost(text)
                .then(result => {
                    console.log("Auth successful")
                    this.PostCreated = "Your post has been published, Refresh the page and check feed!"
                })
                .catch(error => {
                    this.error = error;
                    this.submitted = false;
                    alert(error)
                })

        },
    },
    mounted() {
        feedService.getFeedloggedIn()
            .then(posts => {
                this.posts = posts
                this.loading = false
            })
            .catch(error => this.error = error)
    },
}
</script>