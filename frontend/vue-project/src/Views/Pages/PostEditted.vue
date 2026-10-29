<template>
    <div class="banner">
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
    
                    <router-link to="/dashboard" class="DashBoardButtonsLoggedIn fw-bold">Back to Dashboard</router-link>
    
                </div>
    
                <div class="col-lg-12 col-md-6 col-sm-6 mt-3">
    
                    <form @submit.prevent="UpdatePost">
    
                        <h1 class="text-center  DashBoardButtons">Update your Post!</h1>
    
                        <h1 class="text-center  DashBoardButtons">{{PostUpdated}}</h1>
    
                        <em v-if="error" class="text-center  DashBoardButtons">{{error}}</em>
    
                        <div class="input-group">
    
                            <span class="input-group-text">Your Post</span>
    
                            <textarea name="" class="form-control" id="" cols="30" rows="3" v-model="TextUpdate"></textarea>
    
                        </div>
    
                        <div class="text-center">
    
                            <button class="btn btn-outline-info text-light mt-3">Submit</button>
    
                        </div>
    
                    </form>
    
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
            TextUpdate: "",
            submitted: false,
            PostUpdated: "",
        }
    },
    methods: {
        UpdatePost(d) {
            this.submitted = true
            this.error = ""
            this.PostUpdated = ""

            const { TextUpdate } = this

            this.post.loading = true;
            postService.patchPost(this.$route.params.id, TextUpdate)
                .then((post) => {
                    this.post = post;
                    this.PostUpdated = "Your post has now been updated!"

                })
                .catch(error => this.error = error);
        }
    },
}
</script>

<style scoped>

</style>