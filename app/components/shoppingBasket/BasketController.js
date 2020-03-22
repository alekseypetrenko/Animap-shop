import { BasketView } from "./BasketView.js";

export class BasketController {
    constructor({ subscribe }) {
        this.view = new BasketView(this.closeModal);
        this.subscribe = subscribe;
        this.subscribe("show-basket", this.showBasket);
    }

    showBasket = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }

}