// DOM icinde Yeni Oge Olusturmak..
// const todoList = document.querySelector('#todoList')
const todoList = document.querySelector('ul#todoList')

// const todoFirstItem = document.querySelector('ul>.list-item')
// const todoFirstItem = todoList.querySelector('li')
const todoFirstItem = document.querySelector('ul#todoList>li:first-child')
const todoLastItem = document.querySelector('ul#todoList>li:last-child')

console.log(todoList)
console.log(todoFirstItem)
console.log(todoLastItem)


// Hero Info'yu Body icine eklemek
const heroElement = document.createElement('div')
heroElement.innerHTML = "<h1>Hero Info</h1>"
// en sona: document.body.append(heroElement)
document.body.prepend(heroElement)


const userPrompt = prompt("Yapilacak Islere Eklenecek Bilgi: ")

// console.log(userPrompt)

const newTodoElement = document.createElement('li')
newTodoElement.innerText = userPrompt

// todoList.append(newTodoElement)  // sona ekler
todoList.prepend(newTodoElement) // basa ekler