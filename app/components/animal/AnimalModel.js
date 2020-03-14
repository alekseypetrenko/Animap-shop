export class AnimalModel {
    link = "data/data.json"
    constructor(callback) {
        this.handleLoad = callback;
    }

    getAnimals() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            this.animals = JSON.parse(xhr.responseText);
            this.handleLoad(this.animals);
        })
        xhr.open("GET", this.link);
        xhr.send();
    }
}