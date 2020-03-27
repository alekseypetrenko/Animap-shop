import { OrderView } from "./OrderView.js";
import { OrderModel } from "./OrderModel.js";

export class OrderController {
    constructor({subscribe}) {
        this.view = new OrderView(this.showModal, this.closeModal, this.handleValidation);
        this.model = new OrderModel();

        this.subscribe = subscribe;
        this.subscribe('order', this.showModal);//subcribe for event from CartController
    }

    showModal = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }

    handleValidation = (input, regex) => {
        input = this.view.inputField();
        this.model.validate(input, regex[input.attributes.name.value]);
    }

    // handleMakeOrder = () => {

    // }
}