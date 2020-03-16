import { AnimalController } from "./components/animal/AnimalController.js";
import { SearchFilterController } from "./components/searchFilter/SearchFilterController.js"

const animal = new AnimalController();
const search = new SearchFilterController(animal.searchWithFilter);