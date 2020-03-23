export class CartView {
   
   constructor(closeListener, showListener, minusItemListener, plusItemListener, deleteItemListener) {
        this.modal = document.querySelector(".modal-details");
        this.modalTitle = document.querySelector(".modal-title");
        this.modalBody = document.querySelector(".modal-body");
        this.cart = document.querySelector(".cart");
        this.cartCounter = document.querySelector(".cart-counter");
        
        this.cart.addEventListener("click", showListener);
        $(this.modal).on('hidden.bs.modal', closeListener);
        this.minusItemListener = minusItemListener;
        this.plusItemListener = plusItemListener;
        this.deleteItemListener = deleteItemListener;
    }

    renderCart(data) {
        this.modalTitle.innerHTML = "Cart";
        this.modalBody.innerHTML = "";
        data.forEach(el => {this.modalBody.appendChild(this.renderSingleAnimal(el))});
    }

    renderSingleAnimal(el) {
        const node = document.createElement('div');
        node.classList.add('cart-item', 'd-flex', 'justify-content-between', 'align-items-center', 'col-12');
        node.innerHTML = `
            <table class="show-cart table">
                <tr>
                    <td> 
                        ${el.breed}
                    </td>
                    <td>
                        ${el.price}
                    </td>
                    <td>
                        <div class="input-group">
                            <button class="minus-item input-group-addon btn btn-primary" data-name="${el.breed}">-</button>
                            <input type="number" class="item-count form-control" data-name="${el.breed}" value="${el.count}">
                            <button class="plus-item btn btn-primary input-group-addon" data-name="${el.breed}">+</button>
                        </div>
                    </td>
                    <td>
                        <button class="delete-item btn btn-danger" data-name="${el.breed}">X</button>
                    </td>
                    <td> 
                        ${el.price} * ${el.count}
                    </td>
                </tr>
            </table>
            <div>Total price: ${this.totalPrice(el)}</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-success" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline-secondary">Make order</button>
            </div>
        `;
        node.querySelector(".minus-item").addEventListener("click", this.minusItemListener);
        node.querySelector(".plus-item").addEventListener("click", this.plusItemListener);
        node.querySelector(".delete-item").addEventListener("click", this.deleteItemListener);

        return node;
    }

    show() {
        this.renderCart(data);
        $(this.modal).modal('show');
    }

    close(){
        this.modalTitle.innerHTML = ""
        this.modalBody.innerHTML = "";
    }
}