import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor({ subscribe, notify }) {
        this.view = new AnimalView(this.handleClickDetails, this.handleAddToCart);
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals();

        this.subscribe = subscribe;
        this.subscribe("search", this.search);
        this.subscribe("filter", this.filter);
        this.subscribe("sort", this.sort);
        this.subscribe("pagination", this.pagination);

        this.notify = notify;
     
    }

    handleLoadedAnimals = (arr) => {// render all animals
        this.view.renderAnimals(arr);
    }

    search = (str) => {// search animals by breed
        const data = this.model.searchByBreed(str);
        this.view.renderAnimals(data);
    }

    filter = (str) => {// filter animals by species
        const data = this.model.filterBySpecies(str);
        this.view.renderAnimals(data);
    }

    sort = (id) => {// sort animals by price and age (ascending and descending)
        const data = this.model.sortByType(id);
        this.view.renderAnimals(data);
    }

    pagination = (where) => {// page pagination
        const data = this.model.getPaginationData(where);
        this.view.renderAnimals(data);
    }

    handleClickDetails = (id) => {// for "Details" btn
        const data = this.model.getAnimalId(id);
        this.notify("show-details", data);
    }

    handleAddToCart = (id) => {// for "Add to cart" btn
        const data = this.model.getAnimalId(id);
        this.notify('add-to-cart', data);
    }

}