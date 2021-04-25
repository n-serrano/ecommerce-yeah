function displayErrors (){
    let register = document.querySelector("form#register");
         register.addEventListener("submit", function(e){
            let small = document.querySelector("div.errors");
            let errors = [];
            small.innerHTML = ""

            let inputName = document.getElementById("exampleImputUsername");
            let inputEmail = document.getElementById("exampleInputEmail1");
            let inputPassword = document.getElementById("exampleInputPassword1");
        
        
            if(inputName.value == ""){
            errors.push("El campo nombre se encuentra vacío");
            } else if(inputName.value.length < 4){
            errors.push("El campo nombre debe contener al menos 2 caracteres");
            }

            if(inputEmail.value == ""){
            errors.push("El campo email se encuentra vacío");
            } 


            if(inputPassword.value == ""){
                errors.push("El campo password se encuentra vacío");
            } else if(inputPassword.value.length <= 6){
                errors.push("La contraseña debe contener al menos 6 caracteres");
            }


            function validar_email(email) 
            {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email)
            }

            if(!validar_email(inputEmail.value))
            {
                errors.push("El campo de email no es válido");
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
        
