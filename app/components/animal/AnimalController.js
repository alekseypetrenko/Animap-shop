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
        this.subscribe("pagination", this.pagination);
    }

    handleLoadedAnimals = arr => {
        this.view.spinner();
        this.view.renderAnimals(arr);
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

    pagination = (where = 'next') => {
        const data = this.model.getPaginationData(where);
        this.view.renderAnimals(data);
    }
}