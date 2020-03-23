export class CartModel {
    cartAnimals  = [];
    cartForStorage = [];

    constructor() {

    }

// Save cart
saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(this.cartForStorage));
}

// Load cart
loadCart() {
    this.cartForStorage = JSON.parse(sessionStorage.getItem('shoppingCart'));
}

checkCartStorage(){
    if (sessionStorage.getItem("shoppingCart") != null) {
        this.loadCart();
    }
}

addAnimalToCart(data) {
    console.log(data);
    this.saveCart();

    for (var item in this.cartForStorage) {
        if (this.cartForStorage[item].id === data.id) {

            this.cartForStorage[item].count++;
            this.saveCart();
            this.checkCartStorage();
            return;
        }
    }
    this.cartForStorage.push(data);
    this.saveCart();
    this.checkCartStorage();

}

getAnimalId(id) {
    return this.currentAnimals.find(el => el.id === +id);
}

}