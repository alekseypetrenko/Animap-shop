export class CartView {

    constructor(showListener, closeListener, minusItemListener, plusItemListener, deleteItemListener) {
        this.modal = document.querySelector(".cart-modal");
        this.modalTitle = document.querySelector(".modal-title-cart");
        this.modalBody = document.querySelector(".modal-body-cart");
        this.cart = document.querySelector(".cart");
        this.cartCounter = document.querySelector(".cart-counter");

        this.cart.addEventListener("click", showListener);
        $(this.modal).on('hidden.bs.modal', closeListener);
        this.minusItemListener = minusItemListener;
        this.plusItemListener = plusItemListener;
        this.deleteItemListener = deleteItemListener;
    }

    show(data) {
        this.renderCart(data);
        $(this.modal).modal('show');
    }

    close() {
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
    }

    setCartCounter(num) {
        this.cartCounter.innerHTML = num;
    }

    renderCart(data) {
        this.modalTitle.innerHTML = "Cart";
        this.modalBody.innerHTML = "";
        Object.entries(data).forEach(el => { this.modalBody.appendChild(this.renderSingleAnimal(el)) });
        this.modalBody.innerHTML += `<div><h5>Total price: ${this.totalPrice}</h5></div>`;
    }

    renderSingleAnimal(el) {
        el = el[1];
        const element = document.createElement('div');
        element.classList.add('cart-item', 'd-flex', 'justify-content-between', 'align-items-center', 'col-12');
        element.innerHTML = `
            <table class="show-cart table">
                <tr>
                    <td class="w-25"> 
                    <img src="${el.image}" class="img-fluid" alt="Photo">
                    </td>
                    <td class="w-25"> 
                        ${el.breed}
                    </td class="w-10">
                    <td> 
                        ${el.price} UAH
                    </td>
                    <td class="w-25">
                        <div class="input-group">
                            <button class="btn-minus-item input-group-addon btn btn-primary" id="${el.id}">-</button>
                            <p>${el.count}</p> 
                            <button class="btn-plus-item btn btn-primary input-group-addon" id="${el.id}">+</button>
                        </div>
                    </td>
                    <td>
                        <button class="btn-delete-item btn btn-danger" id="$${el.id}">X</button>
                    </td>
                    </td>
                    <td class="w-15"> 
                        ${el.price * el.count} UAH
                    </td> 
                </tr>
            </table>
        `;
        element.querySelector(".btn-minus-item").addEventListener("click", ev => {
            ev.preventDefault();
            this.minusItemListener(el.id);
        });
        element.querySelector(".btn-plus-item").addEventListener("click", ev => {
            ev.preventDefault();
            this.plusItemListener(el.id);
        });
        element.querySelector(".btn-delete-item").addEventListener("click", ev => {
            ev.preventDefault();
            this.deleteItemListener(el.id);
        });
        
        return element;
    }
}