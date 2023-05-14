// https://www.w3schools.com/html/html_form_input_types.asp

const registerFormDom = document.querySelector('#registerForm')

registerFormDom.addEventListener('reset', () => { // bu listener ise isimsiz arrow function ile tanimlandi..
  console.log('RESETe Basildi')
})

registerFormDom.addEventListener('submit', formSubmit)
// formSubmit arrow function ile kullanilmaya calisinca asagida tanimlandigi icin hakli olarak :) hata aldik.. 

/* 
Arrow Function :::
const formSubmit = (event) => {
  event.preventDefault();
  console.log('Kaydet Butonuna Basildi')

  console.log(event.target)
}
*/

function formSubmit(event) {
  event.preventDefault();
  console.log('Kaydet Butonuna Basildi')

  console.log(event.target)
}