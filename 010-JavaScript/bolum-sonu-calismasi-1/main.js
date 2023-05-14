const hexInputContainer = document.querySelector("#hexInputContainer")
const hexForm = document.querySelector("#hexColorForm")
const addNew = document.querySelector("#addNew")
let counter = 1

addNew.addEventListener("click", () => {
  console.log("click")
  counter += 1
  hexInputContainer.append( newHexColorInput(counter) )
})

function newHexColorInput(itemCount) {
  const newDivElement = document.createElement('div')

  newDivElement.classList.add('col-sm')

  newDivElement.innerHTML = `
  <label for="colorInput-${itemCount}" class="form-label">HEX Color</label>
  <input 
    id="colorInput-${itemCount}"
    type="text" 
    minlength="7" maxlength="7" 
    class="form-control" 
    name="color-${itemCount}"
  >
  `
  return newDivElement
}

hexInputContainer.append( newHexColorInput(counter) )

hexForm.addEventListener("submit", (event) => {
  event.preventDefault()
})