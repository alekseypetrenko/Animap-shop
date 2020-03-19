import {SortView} from "./SortView.js"

export class SortController {
    constructor({notify}) {
        this.view = new SortView(this.handleSort);
        this.notify = notify;
    }

    handleSort = (el) => {
        const data = el.target.id;
        sessionStorage.setItem("sort", data);
        this.notify("sort", data);
    }

}