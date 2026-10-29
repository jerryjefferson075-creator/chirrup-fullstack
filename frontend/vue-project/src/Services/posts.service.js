const getSinglePost = (q) => {
    return fetch("http://localhost:3333/posts/" + q)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        } else if (response.status === 404){
            throw "Not Found"
        } 
        else if(response.status === 500){
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


const LikePost = (d) => {
    return fetch("http://localhost:3333/posts/" + d + "/like",
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
            throw"You cant like a post you have already liked"
        } 
        else if(response.status === 404){
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


const UnlikePost = (j) => {
    return fetch("http://localhost:3333/posts/" + j + "/like",
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
            throw "You can not unlike a post you have not yet liked"
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

const deletePost = (f) => {
    return fetch("http://localhost:3333/posts/" + f,
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
        } else if (response.status === 403){
            throw "You can only delete your own posts"
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


const patchPost = (z,TextUpdate) => {

    return fetch("http://localhost:3333/posts/" + z,
    {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        },
        body: JSON.stringify({
            "text": TextUpdate
        })
    })
    .then((response) => {
        if(response.status === 200){
            return
        } else if(response.status === 401){
            throw "Not logged in"
        } else if(response.status === 403){
            throw "You can only update your own posts"
        } else if(response.status === 400){
            throw "Bad request"
        }
        else if (response.status === 404){
            throw "Not Found"
        } 
        else if (response.status === 500){
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

const CreatePost = (text) => {
    return fetch("http://localhost:3333/posts",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        },
        body: JSON.stringify({
            "text": text
        })
    })
    .then(response => {
        if(response.status === 201){
            return response.json();
        } else if(response.status === 400){
            throw 'Bad request';
        }
        else if(response.status === 401){
            throw 'Not logged in';
        } 
        else if(response.status === 500){
            throw "Server error"
        }
         else {
            throw 'Something went wrong';
        }
    })
    .then(rJson => {
        localStorage.setItem("post_id", rJson.post_id);
        console.log("The post id " + rJson.post_id);
        return rJson
    })
    .catch((err) => {
        console.log(err)
        return Promise.reject(err)
    })
}



export const postService = {
    getSinglePost,
    LikePost,
    UnlikePost,
    deletePost,
    CreatePost,
    patchPost,


}