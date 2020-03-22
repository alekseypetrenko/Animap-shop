export class AnimalModel {
    link = "data/data.json"
    animals = [];
    currentAnimals = [];
    paginationCount = 12;
    paginationPage = 1;
    animalsCheck = [];
    cartForStorage = [];

    constructor(handleLoad) {
        this.handleLoad = handleLoad;
    }

    getAnimals() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            const animals = JSON.parse(xhr.responseText);
            this.animals = animals.map(el => {
                const age = this.convertDate(el);
                return {
                    ...el,
                    age
                }
            });
            this.currentAnimals = this.animals;
            this.handleLoad(this.getPaginationData());
            this.checkCartStorage();
            
        })
        xhr.open("GET", this.link);
        xhr.send();
    }

    convertDate(el) {
        const diff = Date.now() - el.birth_date;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const yearsAge = Math.floor(days / 365);
        const monthsAge = Math.floor((days % 365) / 30);
        const daysAge = Math.floor((days % 365) - monthsAge * 30);

        return {
            yearsAge, monthsAge, daysAge
        }
    }

    filterBySpecies(id) {
        if (id.toLowerCase() === "clear") {
            this.currentAnimals = this.animals;
        }

        else if (id.toLowerCase() === "all") {
            this.currentAnimals = this.animals;
        } else {
            this.currentAnimals = this.animals.filter(({ species }) => species.toLowerCase() === id.toLowerCase());
        }
        //this.handleSessionStorage(id);
        return this.getPaginationData();
    }

    searchByBreed(str) {
        let searchedAnimals = [];
        const reg = new RegExp(str, "i");
        searchedAnimals = this.currentAnimals.filter(({ breed }) => reg.test(breed));

        return searchedAnimals;
    }

    sortByType(id) {
        if (id === "price ascending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => a.price - b.price);
        }
        if (id === "price descending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => b.price - a.price);
        }
        if (id === "age ascending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => b.birth_date - a.birth_date);
        }
        if (id === "age descending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => a.birth_date - b.birth_date);
        }
        return this.getPaginationData();
    }

    getPaginationData(where) {
        switch (where) {
            case 'next': {
                this.paginationPage = this.currentAnimals.length / this.paginationCount > this.paginationPage ? this.paginationPage + 1 : 1;
                break;
            }
            case 'prev': {
                this.paginationPage = this.paginationPage == 1 ? Math.ceil(this.currentAnimals.length / this.paginationCount) : this.paginationPage - 1;
                break;
            }
            default: {
                this.paginationPage = 1;
            }
        }
        const from = (this.paginationPage - 1) * this.paginationCount;
        const to = this.paginationPage * this.paginationCount;
        return this.currentAnimals.slice(from, to);
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