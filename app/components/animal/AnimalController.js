import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor() {
        this.view = new AnimalView();
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals(); 
    }


    handleLoadedAnimals = arr => {
        this.view.renderAnimal(arr);
    }

}