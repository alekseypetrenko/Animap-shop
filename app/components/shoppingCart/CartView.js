export class CartView {

    constructor(showListener, closeListener, deleteItemListener) {
        this.modal = document.querySelector(".cart-modal");
        this.modalTitle = document.querySelector(".modal-title-cart");
        this.modalBody = document.querySelector(".modal-body-cart");

        this.cart = document.querySelector(".cart");
        this.cartCounter = document.querySelector(".cart-counter");
        this.totalPrice = document.querySelector(".price");

        this.cart.addEventListener("click", showListener);
        $(this.modal).on('hidden.bs.modal', closeListener);
        this.deleteItemListener = deleteItemListener;

        this.notificationModal = document.querySelector(".notification-modal");
    }

    show(data, price) {
        this.renderCart(data, price);
        $(this.modal).modal('show');
    }

    close() {
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
    }

    renderCart(data, totalPrice) {// render the whole cart
        this.modalTitle.innerHTML = "YOUR CART";
        this.modalBody.innerHTML = '';
        data.forEach(el => { this.modalBody.appendChild(this.renderSingleAnimal(el)) });
        this.renderTotalPrice(totalPrice);
        this.renderCartCounter(data.length);
    }

    renderTotalPrice(price) {// render total price of all items in cart
        this.totalPrice.innerHTML = `${price} UAH`;
    }

    renderCartCounter(num) {// render cart count in navbar
        this.cartCounter.innerHTML = num;
    }

    renderSingleAnimal(el) {// render 1 item in cart
        const element = document.createElement('div');
        element.classList.add('cart-item', 'd-flex', 'justify-content-between', 'align-items-center', 'col-12');
        element.innerHTML = `
            <table class="show-cart table">
                <tr>
                    <td class="w-25"> 
                    <img src="${el.image}" class="img-fluid" alt="Photo">
                    </td>
                    <td  class="w-25"> 
                        ${el.breed}
                    </td>
                    <td  class="w-25"> 
                        ${el.species} /${el.gender}
                    </td>
                    <td  class="w-25"> 
                        ${el.price} UAH
                    </td>
                    <td>
                        <button class="btn-delete-item btn btn-danger" id="${el.id}">X</button>
                    </td>
                </tr>
            </table>
            
        `;
        element.querySelector(".btn-delete-item").addEventListener("click", ev => {
            ev.preventDefault();
            this.deleteItemListener(el.id);
        });

        return element;
    }

    renderNotification(notUnique) {// notification when adding 1 item twice
        $(this.notificationModal).modal('show');
    }
}