export class AnimalView {
    constructor(listener) {
        this.info = document.querySelector(".info-animals");
        this.spiner = document.querySelector(".spinner-grow");
        this.clickListener = listener;
    }

    renderAnimals(arr) {       
        this.info.querySelectorAll(".btn-details").forEach(el => el.removeEventListener("click", this.clickListener));

        this.info.innerHTML = arr.map(el => this.getAnimal(el)).join("");
        this.spiner.classList.add("d-none");

        this.info.querySelectorAll(".btn-details").forEach(el => el.addEventListener("click", this.clickListener));
    }

    getAnimal(el) {
        return `
            <div class="card col mb-4">
                <div class="card">
                    <img src="${el.image}" alt="Photo" class="center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${el.breed}</li>
                        <li class="list-group-item">${el.species} ${el.gender}</li>
                        <li class="list-group-item">${this.convertedDOB(el)}</li>
                        <li class="list-group-item">Price: ${el.price} UAH</li>
                    </ul>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary">Add to cart</a>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-id="${el.id}">
                    &#128062;Details</button>
                </div>
            </div>`
    }

    convertedDOB(el) {
        return `Age: ${el.age.yearsAge < 1 ? "" : el.age.yearsAge + " years "}
                     ${el.age.monthsAge < 1 ? "" : el.age.monthsAge + " month "}
                     ${el.age.daysAge < 1 ? "" : el.age.daysAge + " days"}`
    }

    getId(el){
        return el.target.dataset.id;
    }
}



{/* <a href="#" class="btn btn-outline-success btn-details" data-id="${el.id}"> &#128062;Details</a> */}