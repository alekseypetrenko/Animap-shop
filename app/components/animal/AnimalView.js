export class AnimalView {
    constructor() {
        this.info = document.querySelector(".info-animals");
    }

    renderAnimals(arr) {
        this.info.innerHTML = arr.map(el => this.getAnimal(el)).join("");
    }

    getAnimal(el) {
        return `
            <div class="card col mb-4">
                <div class="card">
                    <img src="${el.image}" alt="Photo" class="center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${el.breed}</li>
                        <li class="list-group-item">${el.species} ${el.gender}</li>
                        <li class="list-group-item">${this.convertDate(el)}</li>
                        <li class="list-group-item">Price: ${el.price} UAH</li>
                    </ul>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary">Add to cart</a>
                    <a href="#" class="btn btn-outline-info">Details</a>
                </div>
            </div>`
    }

    convertDate(el) {
        let diff = Date.now() - el.birth_date;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let yearsAge = Math.floor(days / 365);
        let monthsAge = Math.floor((days % 365) / 30);
        let daysAge = Math.floor((days % 365) - monthsAge * 30);
       
        return `Age: ${yearsAge < 1? '': yearsAge + "years "}${monthsAge < 1? '': monthsAge + "months "}${daysAge < 1? '': daysAge + "days "} `;
    }
}