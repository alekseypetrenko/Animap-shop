export class AnimalView {
    constructor() {
        this.info = document.querySelector(".info-animals");
    }


    renderAnimals(arr) {
        this.info.innerHTML = arr.map(el => this.getAnimal(el)).join("");
    }

    getAnimal({ species, image }) {

        return `
            <div class="card col mb-4">
                <div class="card">
                    <img src="${image}" alt="Photo">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Fish name12123123</li>
                        <li class="list-group-item">${species}</li>
                        <li class="list-group-item">Age</li>
                        <li class="list-group-item">Price</li>
                    </ul>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary btn-sm">Add to cart</a>
                    <a href="#" class="btn btn-outline-info btn-sm">Details</a>
                </div>
            </div>

    `
    }
}