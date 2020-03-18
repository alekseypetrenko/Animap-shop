import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor({subscribe}) {
        this.view = new AnimalView();
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals();
        //this.clickLogo();
        this.subscribe = subscribe;
        this.subscribe("search", this.search);
        this.subscribe("filter", this.filter);
        this.subscribe("sort", this.sort);
        this.subscribe("panigation", this.panigation);
    }

    handleLoadedAnimals = arr => {
        this.view.renderAnimals(arr);
    }

    clickLogo = (arr) => {
        const data = this.model.searchWithFilter("zoo", "filter");
        this.view.renderAnimals(data);
    }

    search = (str) => {
        const data = this.model.searchByBreed(str);
        this.view.renderAnimals(data);
    }

    filter = (str) => {
        const data = this.model.filterBySpecies(str);
        this.view.renderAnimals(data);
    }

    sort = (id) => {
        const data = this.model.sortByType(id);
        this.view.renderAnimals(data);
    }

    panigation = (where = 'next') => {
        const data = this.model.getPaginationData(where);
        this.view.renderAnimals(data);
    }
}