const admin = document.querySelector(".admin")
let token = localStorage.getItem("x-auth-token")
function checkToken(){
    if(!token){
        window.location.replace("/pages/login.html")
    }
}
checkToken()
function handleLogaut(){
    localStorage.removeItem("x-auth-token")
    open("/pages/login.html", "_self")
}
function adminData(data){
    let userData = JSON.parse(localStorage.getItem("user"))
    console.log(userData);
    admin.innerHTML = `
    <div class="card">
    <img class = "images" src=${userData.image}alt="">
      <div class="data">
<h3>${userData.firstName}</h3>
<p class= "gen">${userData.gender}</p>
</div>
<div class="name">
</div>
</div>
    `
}
adminData()