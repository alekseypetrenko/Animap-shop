export class DetailsView {
    constructor(closeListener) {
        this.modal = document.querySelector(".modal-details");
        this.modalBody = document.querySelector(".modal-body")
        $(this.modal).on('hidden.bs.modal', closeListener);
    }

    show(el) {      
        const modalBody = `
                <div>
                <img src="${el.image}" alt="Photo" class="center">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${el.breed}</li>
                                <li class="list-group-item">${el.species} ${el.gender}</li>
                                <li class="list-group-item">Date of birth: ${new Date(el.birth_date)}</li>
                                <li class="list-group-item">Price: ${el.price} UAH</li>
                            </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add to basket</button>
                </div>
       
        `;

        this.modalBody.innerHTML = modalBody;
        $(this.modal).modal('show');
        
    }

    close(el){
        this.modalBody.innerHTML = "";
    }
}