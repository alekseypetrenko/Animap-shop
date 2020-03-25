import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
    constructor({ subscribe }) {
        this.view = new CartView(this.showModal, this.closeModal, this.deleteItem);
        this.model = new CartModel();

        this.subscribe = subscribe;
        this.subscribe('add-to-cart', this.addAnimalToCart);
    }

    showModal = () => {
        this.view.show(this.model.animalsCart, this.model.calcTotalPrice());
    }

    closeModal = () => {
        this.view.close();
    }

    addAnimalToCart = (animal) => {
        const cart = this.model.addToCart(animal);
        if (cart[1]) {//chek if animal unique (has true status)
            this.view.renderNotification(cart[1]);
        }
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderCart(cart[0], totalPrice);
    }

    deleteItem = (id) => {// delete 1 position from cart
        const cart = this.model.removeFromCart(id);
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderCart(cart, totalPrice);
    }
}

