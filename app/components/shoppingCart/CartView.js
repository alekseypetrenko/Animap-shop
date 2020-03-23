export class CartView {
   
   constructor(closeListener, showListener) {
        this.modal = document.querySelector(".modal-details");
        this.modalTitle = document.querySelector(".modal-title");
        this.modalBody = document.querySelector(".modal-body");
        this.cart = document.querySelector(".cart");
        this.cart.addEventListener("click", showListener);
        $(this.modal).on('hidden.bs.modal', closeListener);
    }

   showAnimals(arr) {
        this.modal.innerHTML = "";
        arr.forEach(elem => {
            this.modal.appendChild(this.showSingleAnimal(elem));
        });
    }

    showSingleAnimal(el) {
        this.modalTitle.innerHTML = "Cart"
        const modalBody = `
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

        this.modalBody.innerHTML = modalBody;
        $(this.modal).modal('show');
        
        // Delete item button
        $(this.modalBody).on("click", ".delete-item", function(event) {
            let name = $(this).data('name')
            shoppingCart.removeItemFromCartAll(name);
        })
          
          
          // -1
        $(this.modalBody).on("click", ".minus-item", function(event) {
            let name = $(this).data('name')
            shoppingCart.removeItemFromCart(name);
        })
          // +1
          $(this.modalBody).on("click", ".plus-item", function(event) {
            let name = $(this).data('name')
            shoppingCart.addItemToCart(name);
        })
          
          // Item count input
        $(this.modalBody).on("change", ".item-count", function(event) {
            let name = $(this).data('name');
            let count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        });
    }

    totalPrice(el) {
        let totalPrice = 0;
        for(let item in cart) {
            totalPrice += cart[item].price * cart[item].count;
        }
        return Number(totalPrice.toFixed(2));
    }

    addToCart(el){
        console.log("Click addToCartBtn", el);
        
    }

    close(el){
        this.modalTitle.innerHTML = ""
        this.modalBody.innerHTML = "";
    }
}