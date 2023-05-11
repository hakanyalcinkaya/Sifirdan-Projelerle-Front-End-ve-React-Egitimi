const userId = prompt("TC No Giriniz: ")
const userAge = prompt("Yasinizi Giriniz: ")

// not: If her zaman true'da calisir..
// if (true) {console.log('calisti..')}
// if (false) {console.log('calismaz')}
// if (!false) {console.log('calisir')}

// TC length 11 olacak
// 12345678900

// negatiften pozitife..
// if (userId.length !== 11) { 
//   console.log("TC No Bilgisi Dogru Olmayabilir..")
// } else if (userId.length === 11 && userAge < 18) {
//   console.log("Siteye Giremezsiniz Cunku 18 Yasindan Kucuksun..")
// } else if (userId.length === 11 && userAge >= 18) {
//   console.log("Siteye Girebilirsiniz..")
// }

// pozitiften negatife..

if (userId.length === 11 && userAge >= 18 && userAge <= 99) {
  const h1TitleElement = document.querySelector('h1#title')
  h1TitleElement.innerHTML = '<em>Siteye Girebilirsiniz..</em>'
  // h1TitleElement.innerText = '<em>Siteye Girebilirsiniz..</em>'
  // if (userAge > 99) {
  //   console.log("Yas Bilgisi Hatali..") // acaba burda olmasi dogr muydu ?
  // }
  // console.log("Siteye Girebilirsiniz..")
} else if (!userAge <= 99) { 
  console.log("Yas Bilgisi 99dan buyuk olabilir..")
  // tersini al operatorunu kullandik ;)
} else if (userAge > 99) { 
  console.log("Yas Bilgisi 99dan buyuk olabilir..")
} else if (userId.length !== 11) { 
  console.log("TC No Bilgisi Dogru Olmayabilir..")
}
else if (userId.length === 11 && userAge < 18) {
  console.log("Siteye Giremezsiniz Cunku 18 Yasindan Kucuksun..")
}