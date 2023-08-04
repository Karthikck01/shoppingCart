
export default function ProductsCard(product) {

    return(
        `<div class="col col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div class="card h-100 shadow">
                <img src=${product.image} alt="" class="card-img-top img-thumbnail"/>
                <div class="card-body">
                    <div class="card-title h5 d-flex justify-content-between align-items-center">
                        <div>${product.name}</div> <div> &#8377; ${product.price}</div>
                    </div>
                    <div class="card-text my-3 lh-1 text-secondary overflow-hidden">
                        ${product.discription}
                    </div>    
                    <button class="btn btn-warning w-100 d-flex justify-content-center align-items-center addcart" id="addcart" value='${product.id}'>
                         Add cart <img class="mx-2" src="./assets/cart-icon.svg"/>
                    </button>
                </div>
            </div>
        </div>`
    )
}
