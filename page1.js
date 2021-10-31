function adduser(){
    username= document.getElementById("login_username").value
    localStorage.setItem("username", username)
    window.location="page2.html"
   }
   
