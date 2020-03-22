export class AnimalView {
    constructor(listener) {
        this.info = document.querySelector(".info-animals");
        this.spiner = document.querySelector(".spinner-grow");
        this.clickListener = listener;
    }

    renderAnimals(arr) {
        this.info.innerHTML = '';
        arr.forEach(elem => {
            this.info.appendChild(this.getAnimal(elem));
        });
        this.spiner.classList.add("d-none");
      }
    
    getAnimal(el) {
        const card = document.createElement("div");
        card.classList.add("card-deck", "col", "mb-4");
        
        card.innerHTML = `
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
                    <button href="#" class="btn btn-outline-secondary">Add to cart</button>
                    <button href="#" class="btn btn-primary details-button" data-id="${el.id}">&#128062;Details</button>
                </div>`      
        card.querySelector(".details-button").addEventListener("click", ev => {
            ev.preventDefault();
            this.clickListener(el.id);
        } ) 
        return card;
    }

    convertedDOB(el) {
        return `Age: ${el.age.yearsAge < 1 ? "" : el.age.yearsAge + " years "}
                     ${el.age.monthsAge < 1 ? "" : el.age.monthsAge + " month "}
                     ${el.age.daysAge < 1 ? "" : el.age.daysAge + " days"}`
    }

}

