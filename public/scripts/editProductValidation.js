let editar = document.getElementById("editar")

editar.addEventListener("submit", function(e){
    let errores = [];

    let inputNombre = document.getElementById("nombre");
    
    let inputDescripcion = document.getElementById("descripcion")
    
    if(inputNombre.value.length < 5){
        errores.push("El campo nombre debe contener al menos 5 caracteres");
     }

    if(inputDescripcion.value.length < 20){
        errores.push("El campo descripción debe contener al menos 20 caracteres");
     }

     let inputImagen = document.getElementById("imagen");

     if (!(/\.(jpg|png|jpeg|gif)$/i).test(inputImagen.value)) {
        errores.push("El archivo a adjuntar no es una imagen válida");
    }

    // let precio = document.getElementById("precio");
    // if(precio.value == ""){
    //     errores.push("Debes ingresarle un precio a tu producto")
    // }
    

    if(errores.length > 0){
        e.preventDefault();
    }
   
    let small = document.querySelector("div.errores");
    for (let i = 0; i  < errores.length; i++) {
        small.innerHTML += "<li>" + errores[i] + "</li>"
    }



})