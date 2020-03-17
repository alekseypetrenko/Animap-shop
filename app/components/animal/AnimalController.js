import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor() {
        this.view = new AnimalView();
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals();
    }

    handleLoadedAnimals = arr => {
        this.view.renderAnimals(arr);
    }

    search = (str) => {
        const data = this.model.searchWithFilter(str, "search");
        this.view.renderAnimals(data);
    }

    filter = (str) => {
        const data = this.model.searchWithFilter(str, "filter");
        this.view.renderAnimals(data);
    }
}