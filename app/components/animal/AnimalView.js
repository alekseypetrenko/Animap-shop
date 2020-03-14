export class AnimalView {
    constructor() {

    }
    
    renderAnimal(arr) {
        
        return `
        <div class="card" style="width: 18rem;">
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Fish name12123123</li>
                    <li class="list-group-item">Species gender</li>
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