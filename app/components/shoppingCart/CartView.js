export class CartView {
    constructor(closeListener) {
        this.modal = document.querySelector(".modal-details");
        this.modalTitle = document.querySelector(".modal-title");
        this.modalBody = document.querySelector(".modal-body");
        $(this.modal).on('hidden.bs.modal', closeListener);
    }

    show(el) {
        this.modalTitle.innerHTML = "Your order:"
        const modalBody = `
                <h1>Basket</h1>
                <div class="modal-footer">;
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Checkout</button>
                </div>
       
        `;

        this.modalBody.innerHTML = modalBody;
        $(this.modal).modal('show');
        
    }

    addToCart(el){
        console.log("Click addToCartBtn", el);
        
    }

    close(el){
        this.modalTitle.innerHTML = ""
        this.modalBody.innerHTML = "";
    }
}