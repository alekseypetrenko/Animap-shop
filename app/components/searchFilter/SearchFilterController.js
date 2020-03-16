import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor(searchFromAnimalController) {
        this.view = new SearchFilterView(this.handleSearch);
        this.search = searchFromAnimalController;
    }

    handleSearch = () => {
        this.search(this.view.searchValue);
    }
}