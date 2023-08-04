export default function cartItems(item,qty) {
 
    return(
        `<li class="list-group-item p" key=${item.id}>
            <div class="d-flex justify-content-between align-items-center">
                <img src="${item.image}" alt="" srcset="" style="max-width: 100px;"> 

                <div class="text-center mx-2">
                    <div class="m-2">
                        ${item.name}     
                    </div>
                    <div class="h5">
                    &#8377; ${item.price}
                    </div>
                </div>

                <div class="mx-2 text-center">
                    <label for="Qty">qty</label>
                    <input type="number" value="${qty}" placeholder="qty" onChange="() => {Total = Total*this.value}" class="form-control" min="1" style="max-width: 70px;">
                </div>

                <div class="btn btn-close text-light cancel-cart-items" id="remove-cart-item">     
                </div>
            </div>
        </li>`
        )
}