import {SortView} from "./SortView.js"

export class SortController {
    constructor({notify}) {
        this.view = new SortView(this.handleSort);
        this.notify = notify;
    }

    handleSort = (el) => {
        const data = el.target.text;
        this.notify("sort", data);
    }

}