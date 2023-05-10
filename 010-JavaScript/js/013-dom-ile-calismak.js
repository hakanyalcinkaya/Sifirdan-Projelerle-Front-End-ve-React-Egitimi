// https://www.w3schools.com/js/js_window.asp
// https://www.w3schools.com/js/js_htmldom.asp

console.log(screen)
console.log("Ekran Yuksekligi:", window.screen.height)
console.log("Pencere Yuksekligi", window.innerHeight)

// console.log("browserdaki bir onceki sayfaya gitme komutu", history.back())
// console.log("browserdaki sonraki sayfaya gitme komutu", history.forward())

// document object model icerisindeki heryere erisebilir, yeni ogeler ekleyebilir, cikarabilir, duzenleme yapabilir, degisiklikleri takip edebiliriz..
console.log(document.title)
console.log(document.head)
console.log(document.body)
document.body.style.backgroundColor = "orange"