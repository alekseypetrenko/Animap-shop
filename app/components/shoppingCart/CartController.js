import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
    constructor({ subscribe }) {
        this.view = new CartView(this.showModal, this.closeModal, this.minusItem, this.plusItem, this.deleteItem);
        this.model = new CartModel();


        this.subscribe = subscribe;
        this.subscribe('add-to-cart', this.addAnimalToCart);
    }

    addAnimalToCart = (data) => {
        this.model.addAnimalToCart(data);
        this.setCountCounter();
    }

    setCountCounter = () => {
        this.view.setCartCounter(this.model.cartCounter);
    }

    showModal = () => {
        this.view.show(this.model.currentCartAnimals);
    }

    closeModal = () => {
        this.view.close();
    }

    minusItem = (data) => {
        this.model.minusAnimalFromCartBtn(data);
        this.setCountCounter();
        this.view.renderCart(this.model.currentCartAnimals);
    }

    plusItem = (data) => {
        this.model.plusAnimalToCartBtn(data);
        this.setCountCounter();
        this.view.renderCart(this.model.currentCartAnimals);
    }

    deleteItem = (data) => {
        this.model.deleteAnimalItemFromCartBtn(data);
        this.setCountCounter();
        this.view.renderCart(this.model.currentCartAnimals);
    }
}

