if (localStorage == undefined || localStorage.cart == undefined || localStorage.cart == "[]") { 
    document.querySelector('p.cartEmpty').innerHTML = 'No hay productos agregados al carrito'
} else {
    let cart = window.localStorage.getItem("cart")
    let showProductsInCart = document.getElementById("showProducts")
    if (typeof cart != "undefined"){
        let showCart = JSON.parse(localStorage.cart)
        for(let i = 0; i < showCart.length; i ++){  
            showProductsInCart.innerHTML += `
            <tr>
            <td>${showCart[i].productName}</td>
            <td>${showCart[i].productDescription}</td>
            <td>${showCart[i].productPrice}</td>
            <td>${showCart[i].productAmount}</td>
            <td><img class="deleteOneButton" src="/images/trash-solid.svg"/>
        
            `
        }
    }
}

    function deleteAll(){
        Swal.fire({
            title: '¿Seguro que quieres vaciar tu carrito?',
            text: "¡Una vez realizada, esta accion no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo borrarlo!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Vacio!',
                'Su carrito fue eliminado.',
                'success'
              ).then(()=>{
                localStorage.clear()
                location.reload()
            })
            } else if (result.dismiss === Swal.DismissReason.cancel){
                Swal.fire(
                    'Accion cancelada!',
                    'Su carrito esta a salvo :)',
                    'error'
                  )
            }
          })
    }
    function message(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Esta opcion aun esta en desarrollo :(!',
            footer: '<a class="alertMessage"href="explain">¿Por que paso esto?</a>'
          })
    }
    
    

