// Fonksiyonlar ile Calismak

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Parametre Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir
// 4: Bir Fonksiyon kendisini Tekrar Calistirabilir


function hello() {// () Hic Parametre Almayabilir
  console.log("Merhaba Dunya")
}

// Fonksiyonu Calistirmak:
hello()

// bir veya birden fazla parametreli fonksiyonlar
function greetings(name) {
  console.log(`Merhaba ${name ? name : '' }`)
}

greetings("Kayra")

function greetings_v2(firstName, lastName) {
  console.log(`Merhaba ${firstName ? firstName : '' } ${lastName ? lastName : ''}`)
}

greetings_v2("Lorem", "Ipsum")

function greetings_v3(firstName = "", lastName = "", age = 18) {
  console.log("greetings_v3")
  console.log(`Merhaba ${firstName} ${lastName} -> ${age}`)
}
greetings_v3("Lorem", "Ipsum")


function multiply(num1, num2) {
  num1 * num2
  // disari herhangi bir bilgi gondermese de icer bir islem yapiyor..
}

multiply(10, 20)

function selectHtmlItemAddInformation(element, info) {
  const item = document.querySelector(element)
  item.innerHTML = info
}

selectHtmlItemAddInformation('#title', "Merhaba Dunya")

// Return Kullanimi
function multiply_with_return(num1, num2) {
  // fonksiyon icinde bircok sey calisabilir..
  // const result = num1 * num2
  // return result
  return num1 * num2
}

const result = multiply_with_return(10, 30)
// console.log(result)

// function sayHelloToUser() {
//   let user;
//   user = prompt("Adiniz: ")
//   return user
// }

// const user = sayHelloToUser()
// console.log(user)

function sayHelloToLorem() {
  const user = prompt("Adiniz: ")
  // if (user === "Lorem") {
  //   console.log("sayHelloToLorem", user)
  // } else {
    //   return sayHelloToLorem()
    // }
  if (user !== "Lorem") {
    return sayHelloToLorem()
  }
  console.log("sayHelloToLorem", user)
}

// sayHelloToLorem()

// Eski Yaptigimiz Bir Calismayi Fonksiyon Olarak Duzenlemek:

function userAccess(userId, userAge) {
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
}

userAccess("Lorem Ipsum", 23)