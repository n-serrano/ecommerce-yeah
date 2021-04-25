window.addEventListener("load",(e)=>{ 
    let cart = document.getElementById('buttonPurchase')
    cart.addEventListener('click',function(){

    let productName = document.getElementById('nameProduct').innerText
    let productDescription = document.getElementById('descriptionProduct').innerText
    let productPrice = document.getElementById('priceProduct').innerText
    let productAmount= 1


    let productInfo = {
        productName,
        productDescription,
        productPrice,
        productAmount
    }
    let cart = JSON.parse(window.localStorage.getItem("cart"))
    if(cart){
        let productInCart =cart.find(function (producto){
            return producto.productName == productInfo.productName
        })
        if(productInCart){
            productInCart.productAmount ++
            localStorage.setItem('cart',JSON.stringify(cart))
        }else {
            productInfo.productAmount = 1
            cart.push(productInfo)  
        localStorage.setItem('cart',JSON.stringify(cart))
        }
    } else {
        let cart = []
        productInfo.productAmount = 1
        cart.push(productInfo)  
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: productName + ' Fue agregado a su carrito exitosamente!',
        showConfirmButton: false,
        timer: 3000
      })  
    
    })
});

