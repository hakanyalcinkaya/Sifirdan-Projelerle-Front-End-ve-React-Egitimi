console.log("window.location.hash", window.location.hash)
console.log("window.location.port", window.location.port)
console.log("window.location.host", window.location.host)
console.log("window.location.hostname", window.location.hostname)

const hashLinks = document.querySelectorAll('.hash-route-link')

const app = document.querySelector('#app')

const routes = {
  "": {
    title: "Ana Sayfa",
    data: "./home.html",
    isApi: false,
  },
  "#todos": {
    title: "Todo List",
    data: "https://jsonplaceholder.typicode.com/todos/",
    isApi: true,
  },
  "#about": {
    title: "About Us",
    data: "./about-us.html",
    isApi: false
  },
  "#contact": {
    title: "Contact",
    data: "./contact.html",
    isApi: false
  },

}

function checkRoute(hash = window.location.hash) {
  // console.log(routes[hash])
  document.title = routes[hash].title
  const dataUrl = routes[hash].data
  // console.log(dataUrl)
  isApi = routes[hash].isApi
  if (isApi) {
    app.innerHTML = ""
    const createUl = document.createElement('ul')
    app.append(createUl)
    fetch(dataUrl).then(res => res.json()).then(data => {
      data.forEach(item => {
        const createLi = document.createElement('li')
        createLi.innerHTML = item.title
        createUl.append(createLi)
      })
    })
  } else if (!isApi) {
    fetch(dataUrl).then(res => res.text()).then(data => app.innerHTML = data)
  }
}

hashLinks.forEach(item => item.addEventListener("click", (event) => {
  // console.log(item.hash)
  // console.log(event)
  checkRoute(item.hash)
}))

checkRoute()