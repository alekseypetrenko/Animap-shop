export class DetailsView {
    constructor() {
        this.modal = document.querySelector("test-modal");
    }

    show(el) {      
        this.modal.innerHTML = `
            
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">DETAILS</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
        
        `;

        return this.modal.innerHTML = `<p>AAAAAAAA</p>`
        console.log(this.modal);
        
    }

    close(el){
        this.modal.innerHTML = '';
    }


}