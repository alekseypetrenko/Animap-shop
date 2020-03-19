export class AnimalModel {
    link = "data/data.json"
    animals = [];
    currentAnimals = [];
    paginationCount = 12;
    paginationPage = 1;

    constructor(callback) {
        this.handleLoad = callback;
    }

    getAnimals() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            const animals = JSON.parse(xhr.responseText);
            this.currentAnimals = this.animals;
            this.animals = animals.map(el => {
                const age = this.convertDate(el);
                return {
                    ...el,
                    age
                }
            });
            //this.handleLoad(this.getPaginationData());
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

    filterBySpecies(id) {
        if (id === "Clear") {
            this.currentAnimals = this.animals;
        } 
        
        else if (id === "All") {
            this.currentAnimals = this.animals;
        } else {
            this.currentAnimals = this.animals.filter(({ species }) => species.toLowerCase() === id.toLowerCase());
        }

        return this.getPaginationData();
    }

    searchByBreed(str) {
        const reg = new RegExp(str, "i");
        this.currentAnimals = this.currentAnimals.filter(({ breed }) => reg.test(breed));
        return this.getPaginationData();
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

    getPaginationData(where){
        switch(where){
            case 'next':{
                this.paginationPage = this.currentAnimals.length / this.paginationCount > this.paginationPage? this.paginationPage + 1: 1;
                break;
            }
            case 'prev':{
                this.paginationPage = this.paginationPage == 1? Math.ceil(this.currentAnimals.length / this.paginationCount): this.paginationPage - 1;
                break;
            }
            default:{
                this.paginationPage = 1;
            }
        }
        const from = (this.paginationPage - 1) * this.paginationCount;
        const to = this.paginationPage * this.paginationCount;
        return this.currentAnimals.slice(from, to);
    }

}
