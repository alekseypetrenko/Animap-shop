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
}