console.log("window.location.hash", window.location.hash)
console.log("window.location.port", window.location.port)
console.log("window.location.host", window.location.host)
console.log("window.location.hostname", window.location.hostname)

const hashLinks = document.querySelectorAll('.hash-route-link')

const routes = {
  "": {
    title: "Ana Sayfa",
  },
  "#todos": {
    title: "Todo List"
  },
  "#about": {
    title: "About Us"
  },
  "#contact": {
    title: "Contact"
  },

}

function checkRoute(hash = window.location.hash) {
  // console.log(routes[hash])
  document.title = routes[hash].title
}

hashLinks.forEach(item => item.addEventListener("click", (event) => {
  // console.log(item.hash)
  // console.log(event)
  checkRoute(item.hash)
}))

checkRoute()