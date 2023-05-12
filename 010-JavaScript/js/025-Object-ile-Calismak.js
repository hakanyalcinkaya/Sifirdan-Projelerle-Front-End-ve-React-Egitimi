// Object ile Calismak:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// Obje Olusturmak
const person = {
  firstName: "Tugra",
  lastName: "JavaScript",
  "last login": "2023/01/01",
  "register-date": "2022/01/01",
  fullName: function () { // bunu kullan ;)
    return `${this.firstName} ${this.lastName}`
  },
  fullNameV2: () => {
    return `${this.firstName} ${this.lastName}`
  }
}

// Bilgiye Erismek:
console.log(person.firstName)
console.log(person["lastName"])
console.log(person["last login"])
console.log(person["register-date"])

// Bilgi Eklemek
person.age = 22;

person["last-time-changed-password"] = "2023/01/01"

// Bilgi Degistirmek
person.firstName = "Moca"
person['lastName'] = "ES6+"

console.log(person)

console.log(person.fullName())
console.log(person.fullNameV2())

console.log(Object.keys(person)) // sadece key bilgileri
console.log(Object.values(person)) // sadece value bilgileri
console.log(Object.entries(person)) // key ve value bilgileri birlikte array icerisinde

const product = {
  isInStock: false,
  price: 0,
  tax: 1.18,
  priceWithTax: function () {
    return this.price * this.tax
  }
}

const iPad = Object.create(product);
iPad.name = "iPad Pro"
iPad.price = 100;
iPad.isInStock = true;


console.log(iPad)
console.log(iPad.priceWithTax())