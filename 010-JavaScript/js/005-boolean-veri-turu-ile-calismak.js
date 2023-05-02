// degisken isimlerinin is, has ile baslatilmasi avantaj saglar..
let isUserActive = false // 0

// kullanici adi ve sifresi soruldu ve dogrulandi :)
isUserActive = true // 1
console.log(isUserActive)

let user;

console.log(user)
console.log(Boolean(user))
console.log(Boolean("")) // false
console.log(Boolean("admin")) // true
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log("0.1", Boolean(0.1))
console.log("1 > 3", 1 > 3) // false

console.log(
  Boolean(-0)
)

console.log(Boolean(0 === 0))

user = "loremIpsum"

// IF Yapisinda Tekrar Isleyecegiz
console.log("Boolean(user)", Boolean(user))
console.log("Boolean(user.length > 9)", Boolean(user.length > 9))