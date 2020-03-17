export class SearchFilterView {
    constructor(listener, filterCb) {
        this.input = document.querySelector(".breed-search");
        this.input.addEventListener("input", listener);
        this.nav = document.querySelectorAll(".nav-link");
        this.cbFilter = filterCb;
        this.filter();
    }

    get searchValue() {
        return this.input.value;
    }

    filter(){
        this.nav.forEach(el => el.addEventListener("click", this.cbFilter));
    }
}