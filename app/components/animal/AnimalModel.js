export class AnimalModel {
    link = "data/data.json"
    animals = [];
    currentAnimals = [];

    constructor(callback) {
        this.handleLoad = callback;
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
            this.handleLoad(this.animals);
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

    // searchWithFilter(str, type) {
    //     const reg = new RegExp(str, "i");
    //     return this.currentAnimals.filter(({ breed, species }) => {
    //         return reg.test(type === "search" ? breed : species);
    //     });

    //     if (id === "All") {
    //         return this.currentAnimals;
    //     }
    // }

    searchWithFilter(str, id, type) {
        const reg = new RegExp(str, "i");

        if (type === "search") {
            return this.currentAnimals.filter(({breed}) => reg.test(breed));
        }

        if (type === "filter") {
            if (id === "All") {
                return this.currentAnimals
            } else {
                return this.currentAnimals.filter(({species}) => species === id);
            }
        }
    }

    sortByType(id) {
        if (id === "price ascending") {
            return this.currentAnimals.sort((a, b) => a.price - b.price);
        }
        if (id === "price descending") {
            return this.currentAnimals.sort((a, b) => b.price - a.price);
        }
        if (id === "age ascending") {
            return this.currentAnimals.sort((a, b) => b.birth_date - a.birth_date);
        }
        if (id === "age descending") {
            return this.currentAnimals.sort((a, b) => a.birth_date - b.birth_date);
        }
    }

}