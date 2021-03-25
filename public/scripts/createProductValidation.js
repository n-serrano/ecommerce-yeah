let agregar = document.getElementById("agregar")

agregar.addEventListener("submit", function(e){
    let errores = [];

    let inputNombre = document.getElementById("nameProduct");
    
    let inputDescripcion = document.getElementById("descriptionProduct")
    
    if(inputNombre.value == ""){
        errores.push("Debes ingresarle un nombre a tu producto")
    }  else if(inputNombre.value.length < 5){
        errores.push("El campo nombre debe contener al menos 5 caracteres");
     }

    if(inputDescripcion.value == ""){
        errores.push("Debes ingresar una descripción")
    }  else if(inputDescripcion.value.length < 20){
        errores.push("El campo descripción debe contener al menos 20 caracteres");
     }

     let inputImagen = document.getElementById("image");

     if (!(/\.(jpg|png|jpeg|gif)$/i).test(inputImagen.value)) {
        errores.push("El archivo a adjuntar no es una imagen válida");
    }

    let precio = document.getElementById("price");
    if(precio.value == ""){
        errores.push("Debes ingresarle un precio a tu producto")
    }
    

    if(errores.length > 0){
        e.preventDefault();
    }
   
    let small = document.querySelector("div.errores");
    for (let i = 0; i  < errores.length; i++) {
        small.innerHTML += "<li>" + errores[i] + "</li>"
    }



})