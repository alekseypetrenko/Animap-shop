import { ViewPaginator } from "./ViewPaginator.js";

export class ControllerPaginator {
    constructor(handleS) {
        this.view = new ViewPaginator(this.handlePagination);
        this.handleSearchMessage = handleS;
    }

    handlePagination = () => {
        this.notify
    }
}