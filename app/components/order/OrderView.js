export class OrderView {
    constructor(showListener, closeListener, listenerInput, listenerBtn) {
        this.modalOrder = document.querySelector(".modal-order");
        this.modalTitleOrder = document.querySelector(".modal-title-order");
        this.modalBodyOrder = document.querySelector(".modal-body-order");
        this.submitBtn = document.querySelector(".btn-submit-order");
        this.inputs = document.querySelectorAll(".inp-order");
        // this.inputName = document.querySelector(".inp-order-name");
        // this.inputEmail = document.querySelecto(".inp-order-email");
        // this.inputPhone = document.querySelecto(".inp-order-phone");

        this.submitBtn.addEventListener("click", listenerBtn);
        this.inputs.forEach(el => el.addEventListener("input", listenerInput));
        this.showListener = showListener;
        this.closeListener = closeListener;
    }

    show() {
        $(this.modalOrder).modal('show');
    }

    close() {
        this.modalTitleOrder.innerHTML = "";
        this.modalBodyOrder.innerHTML = "";
    }

    inputField() {
        return this.inputs.target.value;
    }

}

//this.inputs.forEach(el => validate(el.target, input_fields[el.target.attributes.name.value]))

// document.addEventListener('click', function(event) {

//     if (event.target.dataset.counter != undefined) { // если есть атрибут...
//       event.target.value++;
//     }

//   });