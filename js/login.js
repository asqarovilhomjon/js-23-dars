const form = document.querySelector(".form")
const inputUsername = document.querySelector(".input-username")
const inputPassword = document.querySelector(".input-password")
const API_URL = "https://dummyjson.com"
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let user = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    let response = await fetch(`${API_URL}/auth/login`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    response
    .json()
    .then(res => {
        if(res.token){
            localStorage.setItem('user', JSON.stringify(res))
            localStorage.setItem("x-auth-token", res.token)
            open("/pages/admin.html","_self")
        }else{
            inputUsername.style.border = "1px solid red"
        }
    })
})
