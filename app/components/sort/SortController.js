import {SortView} from "./SortView.js"

export class SortController {
    constructor({notify}) {
        this.view = new SortView(this.handleSort);
        this.notify = notify;
    }

    handleSort = () => {
        this.notify("sort", this.view.sortValue);
    }

}