import { Publisher } from "./helpers/Publisher.js";
import { AnimalController } from "./components/animal/AnimalController.js";
import { SearchFilterController } from "./components/searchFilter/SearchFilterController.js";
import { SortController } from "./components/sort/SortController.js";
import { PaginationController } from "./components/pagination/PaginationController.js"

const publisher = new Publisher();
const animal = new AnimalController(publisher.methods);
const search = new SearchFilterController(publisher.methods);
const sort = new SortController(publisher.methods);
const pagination = new PaginationController(publisher.methods);