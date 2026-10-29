<template>
    <nav class="navbar navbar-expand-lg navvy ">
    
        <div class="container-fluid ">
    
            <a class="navbar-brand me-2 d-none d-sm-block" href="/">Chirrup</a>
    
            <img src="images/logo.png" alt="" class="me-1">
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
          <span class="navbar-toggler-icon"></span>
    
        </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
                    <li class="nav-item">
    
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
    
                    </li>
    
                    <li class="nav-item">
    
                        <a class="nav-link" href="/login">Login/Register</a>
    
                    </li>
    
                </ul>
    
                <form @submit.prevent="SearchUser" class="d-flex" role="search">
    
                    <input class="form-control me-2" type="Search" placeholder="Search users" aria-label="Search" name="Search" v-model="Search">
    
                    <button class="btn btn-outline-light" type="submit">Search</button>
    
                </form>
    
            </div>
    
        </div>
    
    </nav>
</template>

<script>
import { socialService } from "../../Services/social.service";

export default {
    data() {
        return {
            error: "",
            loading: true,
            submitted: false,
            Search: "",
        }
    },
    methods: {

        SearchUser(g) {

            this.submitted = true
            this.error = ""

            const { Search } = this

            if (!(Search)) {
                return;
            }

            socialService.search(Search)
                .then(result => {
                    this.$router.push("/Searchuser/" + Search)
                })
                .catch(error => {
                    this.error = error;
                    this.submitted = false;
                })
        }
    }
};
</script>