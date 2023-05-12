// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
// https://www.javatpoint.com/javascript-events

const btn = document.querySelector('button#hideTitle')

/* 
// 1. Yontem:
btn.addEventListener("click", toggleTitle)

function toggleTitle() {
  // console.log('toggle')
  const h1Element = document.querySelector('#title')
  h1Element.classList.toggle('d-none')
}

*/

/*
// 2: Yontem: 
btn.addEventListener("click", function() {
  const h1Element = document.querySelector('#title')
  h1Element.classList.toggle('d-none')
})
*/

btn.addEventListener("click", () => {
  const h1Element = document.querySelector('#title')
  h1Element.classList.toggle('d-none')
})

const h1Element = document.querySelector('#title')

h1Element.addEventListener("mouseenter", () => {
  console.log("icerde.. ")
  document.body.classList.add("bg-dark", "bg-opacity-50")
  h1Element.classList.toggle("bg-light")
})

h1Element.addEventListener("mouseout", () => {
  console.log("disari cikti.. ")
  document.body.classList.remove("bg-dark", "bg-opacity-50")
  h1Element.classList.toggle("bg-light")
})