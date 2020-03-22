import { CartView } from "./CartView.js";

export class CartController {
    constructor({ subscribe }) {
        this.view = new CartView(this.closeModal);
        this.subscribe = subscribe;
        this.subscribe("show-cart", this.showCart);
        this.subscribe("addto-cart", this.addToCart);
    }

    addToCart = (el)  => {
        this.view.addToCart(el);
    }

    showCart = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }

}