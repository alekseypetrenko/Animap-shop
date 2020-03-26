import { OrderView } from "./OrderView.js";
import { OrderModel } from "./OrderModel.js";

export class OrderController {
    constructor({subscribe}) {
        this.view = new OrderView();
        this.model = new OrderModel();

        this.subscribe = subscribe;
        this.subscribe('order', this.showModal);
    }

    showModal = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }
}