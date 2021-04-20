window.addEventListener("load",(e)=>{
    let cart = window.localStorage.getItem("cart")
   let productData = document.querySelector("#productsInCart")
   console.log(productData)
    if (typeof cart != "undefined"){
        let showCart = JSON.parse(cart)
        console.log(showCart[0].productName)
        for(let i = 0; i < showCart.length; i ++){ 
            productData.innerHTML += `
            <li>
            <span>${showCart[i].productName}</span>
            <span>${showCart[i].productPrice}</span>
            </li>
            `
        }
    }
});
