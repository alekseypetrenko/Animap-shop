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
                        <li class="list-group-item">${new Date(el.birth_date)}</li>
                        <li class="list-group-item">Price: ${el.price} UAH</li>
                    </ul>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary btn-sm">Add to cart</a>
                    <a href="#" class="btn btn-outline-info btn-sm">Details</a>
                </div>
            </div>`
    }
}