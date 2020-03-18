export class PanigationView {
    constructor(listener) {
        this.button = document.querySelectorAll(".pagination-btn");
        this.button.forEach(el => el.addEventListener("click", listener));
    }
}