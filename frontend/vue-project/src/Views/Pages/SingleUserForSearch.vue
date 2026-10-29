<template>
    <div class="container=fluid bg-dark">
    
        <div class="row g-3 bg-dark">

            <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
    
                <router-link to="/dashboard" class=" DashBoardButtonsLoggedIn fw-bold">Back to Dashboard</router-link>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6">
    
                <h1 class=" text-center  display-5 banner-heading DashBoardButtons">Your reuqested user!</h1>
    
            </div>
    
            <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
    
                    <em v-if="user.loading">Loading User...</em>
                    <em v-if="error" class="text-center  DashBoardButtons">{{error}}</em>
    
                    <div v-else>
    
                        <ul style="list-style-type: none;">
    
                            <li v-for="item in user" :key="item">
    
                         FirstName : {{item.first_name}} <br /> LastName : {{item.last_name}} <br /> UserName : {{item.username}} <br /><br />
    
                            </li>
    
                        </ul>
    
                        <hr />
    
                        <p>All post info (for debugging during development): </p>   
    
                        <p> {{user}} </p>
                         <br /><br />
    
                    </div>
    
                    <div v-if="error">
    
                        {{ error }}
    
                    </div>
    
            </div>


                
            <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons ">
                 <div class="text-center">
                  <ul style="list-style-type: none;">
                     <li v-for="item in user" :key="item">
                      <router-link :to="'/follow/' + item.user_id">
                        <button class="btn btn-outline-info">Follow user!</button>
                      </router-link>
                     </li>
                  </ul>
                </div>
            </div>
             <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons ">
    
                 <div class="text-center">
    
                <ul style="list-style-type: none;">
                    <li v-for="item in user" :key="item">
                      <router-link :to="'/unfollow/' + item.user_id">
                        <button class="btn btn-outline-info">Unfollow user!</button>
                      </router-link>
                    </li>
                  </ul>
    
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
        console.log("do we get the route query param?" + this.$route.params.id)
        socialService.search(this.$route.params.id)
            .then((user) => {
                this.user = user;
            })
            .catch(error => this.error = error);
    }
}
</script>