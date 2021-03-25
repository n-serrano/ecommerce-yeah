
let register = document.querySelector("form.register");
register.addEventListener("submit", function(e){
    let errors = [];

    let inputName = document.getElementById("exampleImputUsername");
    
    let inputEmail = document.getElementById("exampleInputEmail1");
    console.log(inputEmail)
    let inputPassword = document.getElementById("exampleInputPassword1");
    let confirmaPassword = document.getElementById("confirmaPassword");
   

 if(inputName.value == ""){
     errors.push("El campo nombre se encuentra vacío");
 } else if(inputName.value.length < 2){
    errors.push("El campo nombre debe contener al menos 2 caracteres");
 }

 if(inputEmail.value == ""){
    errors.push("El campo email se encuentra vacío");
} 


 if(inputPassword.value == ""){
    errors.push("El campo password se encuentra vacío");
} else if(inputName.value.length < 8){
    errors.push("La contraseña debe contener al menos 8 caracteres");
 }

 if(confirmaPassword.value == ""){
    errors.push("Por favor confirma tu contraseña");
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

let imagen = document.getElementById("exampleFormControlFile1");

if (!(/\.(jpg|png|jpeg|gif)$/i).test(imagen.value)) {
   errors.push("El archivo a adjuntar no es una imagen válida");
}

 if(errors.length > 0){
     e.preventDefault();
 }

 let small = document.querySelector("div.errors");
 for (let i = 0; i  < errors.length; i++) {
     small.innerHTML += "<li>" + errors[i] + "</li>"
 }


})