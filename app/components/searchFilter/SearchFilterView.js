// export class SearchFilterView {
//     constructor(listener, filterCb) {
//         this.input = document.querySelector(".breed-search");
//         this.input.addEventListener("input", listener);
//         this.nav = document.querySelectorAll(".link-species");
//         this.cbFilter = filterCb;
//         this.filter();
//     }

//     get searchValue() {
//         return this.input.value;
//     }

//     filter(){
//         this.nav.forEach(el => el.addEventListener("click", this.cbFilter));
//     }
//}

export class SearchFilterView {
    constructor(listenerSearch, listenerFilter) {
        this.input = document.querySelector(".breed-search");
        this.input.addEventListener("input", listenerSearch);
        this.nav = document.querySelectorAll(".link-species");
        this.nav.forEach(el => el.addEventListener("click", listenerFilter));
    }

    get searchValue() {
        return this.input.value;
    }
}