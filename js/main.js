const link =document.querySelector(".link")
console.log(link);
function cheklinkStatus(){
    let token = localStorage.getItem("x-auth-token")
    if(token){
        link.textContent = "Admin"
        link.setAttribute("href", "/pages/admin.html")
    }else{
        link.textContent ="Login"
        link.href = "/pages/login.html"
    }
}
cheklinkStatus()


