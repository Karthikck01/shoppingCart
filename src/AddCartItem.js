import cartItems from "./cartItem.js"; 
import { Products } from "./products.js";

export default function addCartItem() {
  
    const cartTotal = document.getElementById('total')
    const cart_item = document.getElementById('cart-item');
    const addcart = document.getElementsByTagName("button");

    let ItemInCart = [
        // {
        //     id : 1,
        //     name : "T-shirt",
        //     price : 799,
        //     image : "./assets/product1.jpg",
        //     discription : "T-shirts for men go beyond fashion"
        // },
    ] 

    function updatetotal() {
        let Total = 0
        ItemInCart.forEach(element => {
            Total += element.total
        })
        cartTotal.innerHTML = Total
    }
    
    ItemInCart.forEach(element => {
        cart_item.innerHTML += cartItems(element)
    })
    
    
    
    for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener('click',() => {
        
        const item = Products.find(e => {
            return e.id == addcart[i].value
        })
        
        const isAlreadyExist = ItemInCart.map(e => {
            return item.id === e.id 
        })
        
        function include(arr, obj) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == obj) return true;
            }
        }
        
        if (include(isAlreadyExist,true)) {
            alert("already added")

        } else {
            
            ItemInCart = [...ItemInCart,item]
        
            cart_item.innerHTML += cartItems(item,1)

            const removebtn = document.getElementsByClassName('cancel-cart-items')
            const qtyinput = document.querySelectorAll('input')
 
            for (let i = 0; i < removebtn.length; i++) {
                qtyinput[i].addEventListener('input',() => {
                    ItemInCart[i].total = ItemInCart[i].price * qtyinput[i].value
                    updatetotal()
                }) 
                removebtn[i].addEventListener('click',() => {
                    removebtn[i].parentElement.parentElement.remove()
                    ItemInCart=ItemInCart.filter((el)=>el.id != ItemInCart[i].id);
                    updatetotal()
                })
            }
        } 
        updatetotal()
    })
    
}

}