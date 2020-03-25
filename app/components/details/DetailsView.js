export class DetailsView {
    constructor(closeListener) {
        this.modal = document.querySelector(".modal-details");
        this.modalTitle = document.querySelector(".modal-title-details")
        this.modalBody = document.querySelector(".modal-body-details");
        $(this.modal).on('hidden.bs.modal', closeListener);
    }

    show(el) {      
        this.modalTitle.innerHTML = el.breed;
        const modalBody = `
                <img src="${el.image}" alt="Photo" class="center">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list-detail-render"><span>Species:</span> ${el.species}</li>
                                <li class="list-group-item list-detail-render"><span>Gender:</span> ${el.gender}</li>
                                <li class="list-group-item list-detail-render"><span>Date of birth:</span> ${new Date(el.birth_date).getDate()}-${new Date(el.birth_date).getMonth()+1}-${new Date(el.birth_date).getFullYear()}</li>
                                <li class="list-group-item list-detail-render"><span>Price:</span> ${el.price} UAH</li>
                                <li class="list-group-item list-detail-render"><span>Weigth:</span> ${el.weight} kg</li>
                                <li class="list-group-item list-detail-render"><span>Color:</span> ${el.color}</li>
                            </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-success" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                </div>
       
        `;

        this.modalBody.innerHTML = modalBody;
        $(this.modal).modal('show');
        
    }

    close(){
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
    }
}