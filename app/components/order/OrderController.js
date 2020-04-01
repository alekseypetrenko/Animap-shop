import { OrderView } from "./OrderView.js";
import { OrderModel } from "./OrderModel.js";

export class OrderController {
    constructor({ subscribe, notify }) {
        this.view = new OrderView(this.showModal, this.closeModal, this.handleValidation, this.handleOrderInfo);
        this.model = new OrderModel();

        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('cart-info', this.showModal);
        this.subscribe('cart-info', this.handleCartInfo);//subcribe for event from CartController and get cart info (products + totalPrice)
    }

    showModal = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }

    handleValidation = () => {
        let data = this.view.inputsValue;
        this.model.validate(data);
    }

    handleOrderInfo = () => {//save order info into localStorage
        this.closeModal();
        const data = {
            name: this.view.inputsValue[0].value,
            email: this.view.inputsValue[1].value,
            phone: this.view.inputsValue[2].value,
            products: this.cartInfo.products,
            totalPrice: this.cartInfo.totalPrice
        }
        this.model.saveOrder(data);
        this.notify('clear-cart', null);//notify CartController about changes
        this.notify('order-history', data);
    }

    handleCartInfo = (cart) => {
        this.cartInfo = cart;
    }

    clearCartInfo = (cart) => {
        this.cleenCart = cart;
    }
}