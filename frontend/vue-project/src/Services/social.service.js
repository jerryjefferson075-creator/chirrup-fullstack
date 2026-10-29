const search = (Search) => {
    return fetch("http://localhost:3333/search?q=" + Search)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        } else if(response.status === 400){
            throw "Bad request"
        } else if(response.status === 500){
            throw "Server error"
        } 
        else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
       return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })

}

const getSingleUser = (b) => {
    return fetch("http://localhost:3333/users/" + b)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        } else if(response.status === 401){
            throw "Not Found"
        }
        else if(response.status === 500){
            throw "Server error"
        }
        else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const UnfollowUser = (c) => {
    return fetch("http://localhost:3333/users/" + c + "/follow",
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        }
    })
    .then((response) => {
        if(response.status === 200){
            return
        } else if(response.status === 401){
            throw "Not logged in"
        } else if(response.status === 403){
            throw "You can not unfollow a user you have not yet followed"
        } else if(response.status === 404){
            throw "Not Found"
        } else if(response.status === 500){
            throw "Server error"
        }
        else {
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const FollowUser = (a) => {
    return fetch("http://localhost:3333/users/" + a + "/follow",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        }
    })
    .then((response) => {
        if(response.status === 200){
            return
        } else if(response.status === 401){
            throw "Not logged in"
        } else if(response.status === 403){
            throw"You are already following this person"
        } else if(response.status === 404){
            throw "Not Found"
        } else if(response.status === 500){
            throw "Server error"
        }
        else {
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

export const socialService = {
    search,
    getSingleUser,
    FollowUser,
    UnfollowUser,
}