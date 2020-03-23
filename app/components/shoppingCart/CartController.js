import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
    constructor({ subscribe }) {
        this.view = new CartView(this.showModal, this.closeModal, this.minusItem, this.plusItem, this.deleteItem);
        this.modal = new CartModel();


        this.subscribe = subscribe;
        this.subscribe("show-cart", this.showCart);
        this.subscribe("addto-cart", this.addToCart);
    }

    showModal = (arr) => {
        this.view.showAnimals(arr);
    }

    closeModal = () => {
        this.view.close();
    }

    minusItem = () => {
        
    }

    plusItem = () => {
        
    }

    deleteItem = () => {
        
    }






    // addToCart = (el)  => {
    //     this.view.addToCart(el);
    // }

    // showCart = (el) => {
    //     this.view.show(el);
    // }

    

}