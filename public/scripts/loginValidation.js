function displayErrors () {
        let login = document.querySelector("form#login")
        login.addEventListener("submit", function(e){
            let small = document.querySelector("div.errors");
            let errors = [];
            small.innerHTML = ""
    
            let inputEmail = document.getElementById("exampleInputEmail1");
            let inputPassword = document.getElementById("exampleInputPassword1")
            
            if(inputEmail.value == ""){
                errors.push("Debes ingresar tu e-mail")
            } 
    
            if(inputPassword.value == ""){
                errors.push("Debes ingresar tu contraseña")
            }
            
    
            if(errors.length > 0){
                e.preventDefault();
                small.innerHTML += `<ul>`
                small.innerHTML += `<li style="font-weight: bold;" > Hemos encontrado estos errores: </li>`
                for (let i = 0; i  < errors.length; i++) {
                    small.innerHTML += `<li> -${errors[i]} </li>`
                }
                small.innerHTML += `</ul>`
            }
        
            
        }) 
}