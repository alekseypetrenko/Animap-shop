export class CartModel {

    constructor() {
        this.cartAnimals = [];//array of items in the cart
    }

    get cartCounter() {//getter number of items in the cart
        let animalNumbers = parseInt(sessionStorage.getItem('cartNumbers'));
        if (animalNumbers) {
            sessionStorage.setItem('cartNumbers', animalNumbers + 1);
        } else {
            sessionStorage.setItem('cartNumbers', 1);
        }
        return sessionStorage.getItem('cartNumbers');
    }

    get totalPrice () {//getter number of items total price in the cart
        let cartPrice = sessionStorage.getItem('totalPrice');
        
        if(cartPrice != null) {
            cartPrice = parseInt(cartPrice);
            sessionStorage.setItem('totalPrice', cartPrice + el.price);
        } else {
            sessionStorage.setItem('totalPrice', el.price);
        }

        return sessionStorage.getItem('totalPrice');
    }

    get currentCartAnimals() {//getter current items in the cart
        return JSON.parse(sessionStorage.getItem('animalInCart'));
    }

    addAnimalToCart(el) {//add an animal to the cart
        this.cartAnimals = JSON.parse(sessionStorage.getItem('animalInCart'));
        if (this.cartAnimals != null) {
            if (this.cartAnimals[el.id] == undefined) {
                el.count = 0;
                this.cartAnimals = {
                    ...this.cartAnimals,
                    [el.id]: el
                }
            }
            this.cartAnimals[el.id].count++;
        } else {
            el.count = 1;
            this.cartAnimals = {
                [el.id]: el
            }
        }
        sessionStorage.setItem('animalInCart', JSON.stringify(this.cartAnimals));
    }

    plusAnimalToCartBtn(id) {//increase quantity of items in the cart
        for (let i = 0; i < this.cartAnimals.length; i++) {
            if (this.cartAnimals[i].id === id) {
                this.cartAnimals[i].count++;
                return this.cartAnimals;
            }
        }
    }

    minusAnimalFromCartBtn(id) {//decrease quantity of items in the cart
        for (let i = 0; i < this.cartAnimals.length; i++) {
            if (this.cartAnimals[i].id === id) {
                if (this.cartAnimals[i].count == 0) {
                    return this.cartAnimals;
                }
                this.cartAnimals[i].count--;
                return this.cartAnimals;
            }
        }
    }

    deleteAnimalItemFromCartBtn(id) {//delete item from the cart
        for (let i = 0; i < this.cartAnimals.length; i++) {
            if (this.cartAnimals[i].id === id) {
                this.cartAnimals.splice(i, 1);
                break;
            }
            return this.cartAnimals;
        }
    }

    
}
