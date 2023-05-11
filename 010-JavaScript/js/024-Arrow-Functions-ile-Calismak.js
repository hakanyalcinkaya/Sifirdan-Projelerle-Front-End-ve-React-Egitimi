// Arrow functions Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// () => {} // suslu parantez icinde birden fazla islem yapilabilir..
// () => ...

function helloFunction(name) {
  console.log(name)
}

const helloArrowFunction = (name) => {
  console.log(name)
}

const helloArrowFunctionV2 = (name) => console.log(name)

const helloArrowFunctionV3 = name => console.log(name) // eger bir parametre varsa paranteze gerek yok..

const helloArrowFunctionV3_2 = (name = "defaultDeger") => console.log(name) // eger bir parametre varsa paranteze gerek yok..

const helloArrowFunctionV4 = (firstName, lastName) => console.log(firstName, lastName)

const helloArrowFunctionV5 = (firstName, lastName) => {
  const fullName = `${firstName.upperCase()} ${lastName.upperCase()}`
  return fullName
}

// helloArrowFunction("lorem")
helloArrowFunctionV2("lorem")
helloArrowFunctionV3_2()


const multiplyWithReturn = (num1, num2) => {
  return num1 * num2
}

const multiplyWithReturnV2 = (num1, num2) => num1 * num2

// Tam olarak bu bilgiye su anda sahip degiliz ama objeler {} baslar ve icerisindeki bilgileri bazen Arrow functions ile gonderebiliriz..

// Arrow functions ile Obje Donmek:
// const user = {userName: "Kayra"}

const userNameObj = (user) => {
  return {userName: user.toUpperCase()}
}

const userNameObjV2 = (user) => ({userName: user.toUpperCase()})

const returnUserName = userNameObj("Lorem")
const returnUserNamev2 = userNameObjV2("Lorem")
console.log(returnUserNamev2)