export class AnimalView {
    constructor(listener, handleAddToCart) {
        this.info = document.querySelector(".info-animals");
        this.spiner = document.querySelector(".spinner-grow");
        this.clickListener = listener;
        this.handleAddToCart = handleAddToCart;
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
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-main-render">${el.breed}</li>
                            <li class="list-group-item list-main-render">${el.species} ${el.gender}</li>
                            <li class="list-group-item list-main-render">${this.convertedDOB(el)}</li>
                            <li class="list-group-item list-main-render">Price: ${el.price} UAH</li>
                        </ul>
                        <button type="button" class="btn btn-outline-secondary addto-cart-button data-id=${el.id}">Add to cart</button>
                        <button type="button" class="btn btn-outline-success details-button" data-id="${el.id}">&#128062;Details</button>
                    </div>
            </div>` 

        card.querySelector(".details-button").addEventListener("click", ev => {
            ev.preventDefault();
            this.clickListener(el.id);
        });
        card.querySelector(".addto-cart-button").addEventListener("click", ev =>{
            ev.preventDefault();
            this.handleAddToCart(el.id);
        })
        return card;
    }

    convertedDOB(el) {
        return `Age: ${el.age.yearsAge < 1 ? "" : el.age.yearsAge + " years "}
                     ${el.age.monthsAge < 1 ? "" : el.age.monthsAge + " month "}
                     ${el.age.daysAge < 1 ? "" : el.age.daysAge + " days"}`
    }

}

