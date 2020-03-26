export class OrderView {
    constructor(showListener, closeListener) {
        this.modalOrder = document.querySelector(".modal-order");
        this.modalTitleOrder = document.querySelector(".modal-title-order");
        this.modalBodyOrder = document.querySelector(".modal-body-order");
    }

    show() {
        $(this.modalOrder).modal('show');
    }

    close() {
        this.modalTitleOrder.innerHTML = "";
        this.modalBodyOrder.innerHTML = "";
    }
}