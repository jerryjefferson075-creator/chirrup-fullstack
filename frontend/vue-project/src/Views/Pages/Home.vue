<template>
    <div class="banner">
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-lg-12 col-md-12 col-sm-1">
    
                    <h1 class="text-light text-center  display-5 banner-heading mt-0 d-none d-sm-block ">Hi and welcome to Chirrup!</h1>
    
                    <p class="text-light text-center  display-6 banner-heading2 d-none d-sm-block">Chirrup is a social media application for the University. Here you can see what people are getting up to and enage with their posts! <br /> <br /> <br /> <span>Create an account to engage!</span> <br />Scroll down to view peoples posts!
    
                        <br /> <br /></p>
    
                    <p class=" text-center fw-bold click text-warning"> Click on a post to view!</p>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
    
    <div class="col-lg-12 col-md-3 col-sm-1 bg-dark">
    
        <em v-if="loading">Loading posts... Refresh the page if noting is shown!</em>
    
        <h1 class="text-center  fw-bold  homefeed">FEED</h1>
    
        <ul class="" style="list-style-type: none;" v-if="posts.length">
    
            <li v-for="post in posts" :key="post.post_id">
    
                <router-link :to="'/posts/' + post.post_id" style="text-decoration: none">
                
    
                    <p class="feedtext mt-2 me-5 text-center" style="color: rgb(202, 202, 116);">{{post.author.username}} <br /> Post: {{post.text}} <br /> TimeStamp: {{post.timestamp}}</p>
    
                    <div v-for="likes in post.likes">
    
                        <p class="feedtext text-center me-5" style="color: rgb(202, 202, 116);">Liked by: {{likes.username}}</p>
    
                    </div>
    
                    <br>
    
                    <br>
    
                </router-link>
    
            </li>
    
        </ul>
    
        <div v-if="error">
    
            {{error}}
    
        </div>
    
    </div>
</template>

<script>
import { postService } from "../../Services/posts.service";
import { userService } from "../../Services/users.service";
import { socialService } from "../../Services/social.service";
import { feedService } from "../../Services/feed.service";

export default {
    data() {
        return {
            posts: [],
            error: "",
            loading: true,
            submitted: false,
            post: {},



        }
    },
    methods: {

    },
    mounted() {
        feedService.getFeed()
            .then(posts => {
                this.posts = posts
                this.loading = false
            })
            .catch(error => this.error = error)
    },
}
</script>