import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor({ notify }) {
        this.view = new SearchFilterView(this.handleSearch, this.handleFilter);
        this.notify = notify;
    }

    handleSearch = () => {
        const data = this.view.searchValue;
        this.notify("search", data);
    }

    handleFilter = (el) => {
        const data = el.target.id;
        this.notify("filter", data);
    }
}