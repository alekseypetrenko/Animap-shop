export class OrderHistoryModel {
    constructor() {
        this.orderHistory = JSON.parse(localStorage.getItem('order')) || [];
    }

    get orderCounter() {
        return this.orderHistory.length;
    }

    removeFromOrderHistory(id) {// remove 1 order from orderHistory
        this.orderHistory = this.orderHistory.filter(animal => animal.id !== parseInt(id));
        localStorage.setItem('order', JSON.stringify(this.orderHistory));
        return this.animalsCart;
    }

    calcTotalPrice() {// calculate total price og items in cart
        return this.orderHistory.reduce((total, current) => total + current.price, 0);
    }

}