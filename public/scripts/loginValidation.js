let login = document.getElementById("login")
console.log(login)
login.addEventListener("submit", function(e){
    let errores = [];

    let inputEmail = document.getElementById("exampleInputEmail1");
    console.log(inputEmail)
    let inputPassword = document.getElementById("exampleInputPassword1")
    
    if(inputEmail.value == ""){
        errores.push("Debes ingresar tu e-mail")
    } 

    if(inputPassword.value == ""){
        errores.push("Debes ingresar tu contraseña")
    }
    

    if(errores.length > 0){
        e.preventDefault();
    }
   
    let small = document.querySelector("div.errores");
    for (let i = 0; i  < errores.length; i++) {
        small.innerHTML += "<li>" + errores[i] + "</li>"
    }



})