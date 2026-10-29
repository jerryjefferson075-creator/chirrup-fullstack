<template>
    <div class="banner">
    
        <h1 class="text-light text-center  display-5 banner-heading mt-0 ">Create your Account!</h1>
    
        <h1 class="text-warning text-center  display-5 banner-heading mt-0 ">{{error}}</h1>
    
        <h1 class="text-warning text-center  display-5 banner-heading mt-0 ">{{AccountCreated}}</h1>
    
        <div class="container">
    
            <div class="row">
    
                <div class="col-lg-12 col-md-6 col-sm-6">
    
                    <form @submit.prevent="addUser">
    
                        <div class="">
    
                            <label for="first_name" class="form-label fw-bold FormText">Firstname</label>
    
                            <input type="name" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" name="first_name" v-model="first_name">
    
                        </div>
    
                        <div class="">
    
                            <label for="last_name" class="form-label fw-bold FormText">Lastname</label>
    
                            <input type="name" class="form-control" id="exampleInputLastname" name="last_name" v-model="last_name">
    
                        </div>
    
                        <div class="">
    
                            <label for="username" class="form-label fw-bold FormText">Username</label>
    
                            <input type="name" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" name="username" v-model="username">
    
                        </div>
    
                        <div class="mb-2">
    
                            <label for="password" class="form-label fw-bold FormText">Password</label>
    
                            <input type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp" name="password" v-model="password">
    
                        </div>
    
                        <button type="submit" class="btn btn-primary">Submit</button>
    
                    </form>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>


<script>
import { userService } from "../../Services/users.service";

export default {
    data() {
        return {
            error: "",
            loading: true,
            submitted: false,
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            AccountCreated: "",
        }
    },
    methods: {
        addUser(e) {
            this.submitted = true
            this.error = ""
            this.AccountCreated = ""

            const { first_name, last_name, username, password } = this

            if (!(username && password && first_name && last_name)) {
                this.error = "You cannot submit without entering all details"
                return;
            }



            const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
            if (!(password_pattern.test(password))) {
                this.error = "Password not strong enough."
                return;
            }


            userService.create(first_name, last_name, username, password)
                .then(result => {
                    this.AccountCreated = "Account Created!"
                })
                .catch(error => {
                    this.error = error;
                    this.submitted = false;
                })

        },
    }

}
</script>