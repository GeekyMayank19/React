loginData = []
function formlogin() {
    debugger;
    // validation();
    var fuser = document.getElementById("uname").value;
    var fpassword = document.getElementById("psw").value;

    let username="Admin"
    let password="Admin@123"

    let data = { username, password }
    loginData.push(data)
    console.log(loginData);
    localStorage.setItem('loginData', JSON.stringify(loginData));
    var loginUserdata = JSON.parse(localStorage.getItem("loginData"))
   const isUserValid = loginUserdata.some(g => g.username ===fuser)  
   const ispassValid= loginUserdata.some(p => p.password === fpassword)
   if(isUserValid && ispassValid){
       alert("Login Pass")
       window.location.href="form_page.html";
   }
   else{
       alert("You need to login first")
       return
   }
    
}