// rakamla degisken isimleri baslayamaz..

// let 1user = "1. user"
// console.log(1user)

// console.log(user1)

;let user1 = "1. user"
;console.log(user1);
console.log(
  user1
);
// Not: Her kodun basinda aslinda gorunmeyen bir noktalivirgul var..
// ama yinede biz her satirin basina noktalivirgul eklemiyoruz :)

let user;
console.log(user)

// let user = "Sistem Kullanici"
user = "SystemUser"

user = "Admin"
console.log(user)

const PASSWORD = 1234;
console.log("Sifre:", PASSWORD)


// bu hatali cunku const ile bir defa tanimlanabilir..
// PASSWORD = "100123432423523"
// console.log("Degisen Sifre:", PASSWORD)

// Blok icinde tekrar ayni isimler kullanilabilir..
{
  let user = "Duygu";
  console.log("Blok icinde:", user)
  const PASSWORD = "12143-0583409583453405983049534957"
  console.log("Blok icinde:", PASSWORD)
}

console.log(user)
console.log("Sifre:", PASSWORD)

console.log("44. Satidaki Bilgiye Erisebilir miyiz? ", userName)

var userName = "44. Satirdaki Bilgi"
console.info("userName:", userName)

{
  userName = "Blok Icindeki Bilgi"
  console.info("userName Blok:", userName)
}

// Degisken isimlerinin lutfen anlamli olmasini saglayalim..
let i = "1" // bunu kullanmayalim
let x = "info" // bunu kullanmayalim

// bool -> laptop kullaniyor musun? evet / hayir 
// macOs kullaniyormusun? evet / hayir
// yazilimci misin? evet / hayir

isMacOsUser = true
isLaptopUser = false
hasPassword = true
