<template>
    <div class="banner">
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
    
                    <router-link to="/dashboard" class="DashBoardButtonsLoggedIn fw-bold">Back to Dashboard</router-link>
    
                </div>
    
                <div class="col-lg-12 col-md-6 col-sm-6 mt-3">
    
                    <em v-if="error" class="text-center  DashBoardButtons">{{error}}</em>
    
                    <em v-if="!error" class="text-center  DashBoardButtons">You have now unliked this post!</em>
    
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
    created() {

        console.log("the params id is " + this.$route.params.id)
        this.post.loading = true;
        postService.UnlikePost(this.$route.params.id)
            .then((post) => {
                this.post = post;
            })
            .catch(error => this.error = error);
    },
}
</script>

<style scoped>

</style>