export function MyCartActive() {
    const shoppingCart = document.getElementById('shopping-cart');
    const openBtn = document.getElementById('open-cart');
    const closeBtn = document.getElementById('close-cart');
    
    
    // Cart open and close
    openBtn.addEventListener('click', () => {
        shoppingCart.style.visibility = 'visible'
        shoppingCart.style.animation = 'slidein 1s 1'
    })
    closeBtn.addEventListener('click',() => {
        shoppingCart.style.animation = 'slideout 1s 1'
        setTimeout(() => {
            shoppingCart.style.visibility = 'hidden'
        },800)
    })

}

