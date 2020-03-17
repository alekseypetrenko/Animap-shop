export class AnimalModel {
    link = "data/data.json"
    animals = [];
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
            })
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

    searchWithFilter(str, type) {
        const reg = new RegExp(str, "i");
        return this.animals.filter(({ breed, species }) => reg.test(type === "search" ? breed : species));
    }

    sortByType(type) {
        if (type === "price ascending") {
            return this.animals.sort((a, b) => a.price - b.price);
        }
        if (type === "price descending") {
            return this.animals.sort((a, b) => b.price - a.price);
        }
        if (type === "age ascending") {
            return this.animals.sort((a, b) => a.age - b.age);
        }
        if (type === "age descending") {
            return this.animals.sort((a, b) => b.age - a.age);
        }
    }

}