// While Dongusu (olana kadar devam et ;) ) ile calismak..
// https://www.w3schools.com/js/js_loop_while.asp

// let counter = 0;

// while (counter < 10) {
//   console.log(counter)
//   counter ++;
// }

// TC length 11 olacak
// 12345678900

let userId = prompt("TC No Giriniz: ")

while (userId.length !== 11) {
  console.log("While Calisti..")
  userId = prompt("TC No Giriniz: ")
}

let userAge = prompt("Yasinizi Giriniz: ")

while ( !(userAge >= 18 && userAge <= 99) ) {
  console.log("While Calisti..")
  userAge = prompt("Yasinizi Giriniz: ")
}

console.log("While dan sonra sistemim calismaya devam ediyor..")