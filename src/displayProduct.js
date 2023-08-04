import ProductsCard from "./ProductsCard.js";
import { Products } from "./products.js";

export default function DisplayProduct() {

const procuctContainer = document.getElementById('procuctContainer');

Products.forEach(element => {
    procuctContainer.innerHTML += ProductsCard(element)
});
} 