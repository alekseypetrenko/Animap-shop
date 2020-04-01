import { OrderHistoryView } from "./OrderHistoryView"
import { OrderHistoryModel } from "./OrderHistoryModel";

export class OrderHistoryController {
    constructor({ subscribe }) {
        this.view = new OrderHistoryView(this.showModal, this.closeModal, this.deleteOrder);
        this.model = new OrderHistoryModel();

        this.subscribe = subscribe;
        this.subscribe('order-history', this.showModal);
    }

    showModal = () => {
        this.view.show(this.model.orderHistory, this.model.calcTotalPrice());
        this.renderOrderHistory(this.model.orderHistory);
    }

    closeModal = () => {
        this.view.close();
    }

    deleteOrder = () => {
        const order = this.model.removeFromOrderHistory(id);
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderOrderHistory(order, totalPrice);
        this.setCartCounter();
    }

    orderCounter = () => {//number of orders in orderHistory rendering in navbar
        this.view.renderOrderHistoryCounter(this.model.orderCounter);
    };
}