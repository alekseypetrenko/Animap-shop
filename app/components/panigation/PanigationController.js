import { PanigationView } from "./PanigationView.js"

export class PanigationController {
    constructor({ notify }) {
        this.view = new PanigationView(this.handlePanigation);
        this.notify = notify;
    }

    handlePanigation = (el) => {
        this.notify("pagination", el.target.id);
    }

}