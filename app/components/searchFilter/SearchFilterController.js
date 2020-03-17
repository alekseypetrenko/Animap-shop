import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor(searchFromAnimalController, filterFromAnimalController) {
        this.view = new SearchFilterView(this.handleSearch, this.handleFilter);
        this.search = searchFromAnimalController;
        this.filter = filterFromAnimalController;
    }

    handleSearch = () => {
        this.search(this.view.searchValue);
    }

    handleFilter = (el) => {
        
        const species = el.target.text;
        console.log(species);
        
        this.filter(this.view.filter(species))
    }
}