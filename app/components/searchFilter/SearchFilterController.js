import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor({notify}) {
        this.view = new SearchFilterView(this.handleSearch, this.handleFilter);
        this.notify = notify;
    }

    handleSearch = () => {
        this.notify("search", this.view.searchValue);
    }

    handleFilter = (el) => {
        const species = el.target.text;
        this.notify("filter", species);
    }
}