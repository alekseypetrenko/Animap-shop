import { DetailsView } from "./DetailsView.js";

export class DetailsController {
    constructor({ subscribe }) {
        this.view = new DetailsView(this.closeModal);
        this.subscribe = subscribe;
        this.subscribe("show-details", this.showModal);
    }

    showModal = (el) => {
        this.view.show(el);
    }

    closeModal = (e) => {
        this.view.close(e);
    }

}