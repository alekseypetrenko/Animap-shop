export class CartView {

    constructor(showListener, closeListener, deleteItemListener, orderListener) {
        this.modal = document.querySelector(".cart-modal");
        this.modalTitle = document.querySelector(".modal-title-cart");
        this.modalBody = document.querySelector(".modal-body-cart");

        this.cart = document.querySelector(".cart");
        this.cartCounter = document.querySelector(".cart-counter");
        this.totalPrice = document.querySelector(".price");

        this.notificationModal = document.querySelector(".notification-modal");//notification when adding 1 item twice
        this.orderBtn = document.querySelector(".btn-order");

        this.deleteItemListener = deleteItemListener;
        this.cart.addEventListener("click", showListener);
        this.orderBtn.addEventListener("click", orderListener);
        this.closeListener = closeListener;
    }

    show(data, price) {
        this.renderCart(data, price);
        $(this.modal).modal('show');//bootstrap4 documentation show modal
    }

    close() {
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
        $(this.modal).modal('hide');//bootstrap4 documentation close modal - close modal when opening order modal
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
                    <img src="${el.image}" class="img-fluid" alt="Photo123">
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
            </table>`;

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