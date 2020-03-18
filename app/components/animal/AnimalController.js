import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor({subscribe}) {
        this.view = new AnimalView();
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals();

        this.subscribe = subscribe;
        this.subscribe("search", this.search);
        this.subscribe("filter", this.filter);
        this.subscribe("sort", this.sort);
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

    sort = (id) => {
        const data = this.model.sortByType(id);
        this.view.renderAnimals(data);
    }
}