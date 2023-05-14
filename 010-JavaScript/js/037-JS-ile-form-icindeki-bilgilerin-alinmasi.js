const registerFormElement = document.querySelector('#registerForm')

registerFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event)

  // const firstName = document.querySelector("input[name=firstName]")
  // console.log(firstName.value)

  // Array'e Ceviremedigimiz icin Olmadi ;)
  // event.target.elements.forEach(item => {
  //   console.log(item)
  // })

  // console.log( Array.from(event.target.elements) )
  const formValues = {}
  Array.from(event.target.elements).forEach(item => {
    if (item.tagName === "INPUT") {
      // console.log(item.type)
      // console.log(item.tagName)
      // console.log(item.name)
      // console.log(item.value)
      if (
        item.type === "text" || 
        item.type === "email" || 
        item.type === "password"
      ) {
        formValues[item.name] = item.value
      }
      if (item.type === "checkbox") {
        formValues[item.name] = item.checked
      }
    }
  })
  console.table(formValues)
  registerFormElement.reset()
})