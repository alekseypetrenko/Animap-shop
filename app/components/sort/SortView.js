export class SortView {
    constructor(listener) {
        this.dropdown = document.querySelectorAll(".dropdown-item");
        this.dropdown.addEventListener("click", listener);
    }

    get sortValue () {
        return this.dropdown.text;
    }


}

