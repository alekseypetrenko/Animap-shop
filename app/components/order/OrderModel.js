export class OrderModel {
    constructor() {
        this.regex = {
            name: /^[A-Za-z]{3,12}$/, //3-12 characters: letters
            email: /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([a-z]{2,8})$/, //letters, digits, dots, hyphens
            phone:/^\+38\(\d{3}\)\d{7}$/, //+38(3 numbers)7 numbers
        }
    }

    validate (input, regex) {
      return regex.test(input.value) ? input.className = 'valid' : input.className = 'invalid';
    }
    
    
}

// const input_fields = {
//   username: /^[a-z\d]{5,12}$/i,
//   email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
//   password: /^[#\w@_-]{8,20}$/,
//   telephone:/^\d{11}$/,
// }

// const validate = (field, regex) => {
//   regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
// }

// let keys = document.querySelectorAll('input');
// keys.forEach(item => item.addEventListener(
//   'keyup', e => {
//     validate(e.target, input_fields[e.target.attributes.name.value])
//   }
// ));
