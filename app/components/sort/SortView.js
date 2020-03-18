export class SortView {
    constructor(listener) {
        this.dropdown = document.querySelectorAll(".dropdown-item");
        this.cbSort = listener;
        this.sort();
    }

    sort(){
        this.dropdown.forEach(el => el.addEventListener("click", this.cbSort));
    }


}

