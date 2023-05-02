let isActive = true
let firstName = "Beyza"
let year = 2023

console.log("isActive", isActive, typeof(isActive))
console.log("firstName", firstName, typeof(firstName))
console.log("year", year, typeof(year))
console.log("year bilgisi number mi ?", typeof(year) === "number")

let age = 35;
let addToAge = "11.37abc"
let result = age + addToAge

console.log("age + addToAge : ", result)
console.log("typeof age : ", typeof(age))
console.log("typeof addToAge : ", typeof(addToAge))
console.log("typeof result : ", typeof(result))

// string icindeki bilgiyi parse etmeye calisiyoruz
console.log(typeof(addToAge), typeof(parseInt(addToAge)))
console.log(addToAge, parseInt(addToAge))

result = age + parseInt(addToAge)
console.log("age + addToAge : ", result)


result = age + Number(addToAge)
console.log("age + addToAge : ", result)

result = age + parseFloat(addToAge)
console.log("age + addToAge : ", result)

let strResult = result.toString()
console.log("strResult ", strResult)
console.log("strResult typeof", typeof(strResult))