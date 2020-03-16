export class SearchFilterView {
    constructor(listener) {
        this.input = document.querySelector(".breed-search");
        this.input.addEventListener("input", listener);
    }

    get searchValue() {
        return this.input.value;
    }
}