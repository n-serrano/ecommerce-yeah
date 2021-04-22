window.addEventListener("load",(e)=>{ 
    let cart = document.getElementById('buttonPurchase')
    cart.addEventListener('click',function(){

    let productName = document.getElementById('nameProduct').innerText
    let productPrice = document.getElementById('priceProduct').innerText

    let productInfo = {
        productName,
        productPrice
    }
    let cart = JSON.parse(window.localStorage.getItem("cart"))
    if(cart){
        cart.push(productInfo)  
        localStorage.setItem('cart',JSON.stringify(cart))
        console.log(cart)
    } else {
        let cart = []
        cart.push(productInfo)  
        localStorage.setItem('cart',JSON.stringify(cart))
        console.log(cart)
    }    
    setTimeout(() => Swal.fire(productName + '¡Se agregó al carrito correctamente!'),2000)
    })
    });
