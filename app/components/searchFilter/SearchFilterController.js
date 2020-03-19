import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor({notify}) {
        this.view = new SearchFilterView(this.handleSearch, this.handleFilter);
        this.notify = notify;
    }

    handleSearch = () => {
        const data = this.view.searchValue;
        sessionStorage.setItem("search", data);
        this.notify("search", data);
    }

    handleFilter = (el) => {
        const data = el.target.id;
        sessionStorage.setItem("filter", data);
        this.notify("filter", data);
    }
}