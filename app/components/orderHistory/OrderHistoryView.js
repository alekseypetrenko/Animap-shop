export class OrderHistoryView {
    
    constructor(showListener, closeListener, deleteOrderListener) {
        this.modal = document.querySelector(".orderHistory-modal");
        this.modalTitle = document.querySelector(".modal-title-orderHistory");
        this.modalBody = document.querySelector(".modal-body-orderHistory");
        this.tableBody = document.querySelector(".table-body-orderHistory")

        this.orderIcon = document.querySelector(".order-history-icon");
        this.orderCounter = document.querySelector(".order-history-counter");
        this.totalPrice = document.querySelector(".order-history-price");

        this.showListener = showListener;
        this.closeListener = closeListener;
    }

    show(data, price) {
        this.renderOrderHistory(data, price);
        $(this.modal).modal('show');//bootstrap4 documentation show modal
    }

    close() {
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
        $(this.modal).modal('hide');//bootstrap4 documentation close modal
    }

    renderOrderHistory(data, totalPrice) {// render the whole orderHistory
        this.modalTitle.innerHTML = "HISTORY OF ORDERS";
        this.tableBody.innerHTML = '';
        data.forEach(el => { this.tableBody.appendChild(this.renderSingleOrder(el)) });
        this.renderOrderHistoryCounter(data.length);
        this.renderTotalPrice(totalPrice);
    }

    renderSingleOrder(el) {// render 1 order in orderHistory
        const element = document.createElement('tr');
        element.innerHTML = `
            <td class="w-25"> 
                ${el.name}
            </td>
            <td class="w-25"> 
                ${el.email}
            </td>
            <td  class="w-25"> 
                ${el.phone}
            </td>
            <td  class="w-25"> 
                ${el.breed}
            </td>
            <td  class="w-25"> 
                ${el.price} UAH
            </td>
            <td>
                <button class="btn-delete-order btn btn-danger" id="${el.id}">X</button>
            </td>
        `;

        element.querySelector(".btn-delete-order").addEventListener("click", ev => {
            ev.preventDefault();
            deleteOrderListener(el.id);
        });

        return element;
    }

    renderTotalPrice(price) {// render total price of all orders
        this.totalPrice.innerHTML = `${price} UAH`;
    }

    renderOrderHistoryCounter(num) {// render orderHistory count in navbar
        this.orderCounter.innerHTML = num;
    }
}