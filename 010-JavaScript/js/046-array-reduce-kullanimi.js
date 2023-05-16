// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// arr.reduce((onceki, simdiki) => {yapilacak islem}, ilkDeger )

const items = [1, 2, 3, 4, 5]

const sum = items.reduce((accumulator, current) => accumulator + current, 0)

console.log(sum)


const prices = [100, 200, 10, 40, 500, 90]

const maxPrice = prices.reduce((acc, current) => Math.max(acc, current))

console.log(maxPrice)

const itemPrices = [
  {name: "Laptop", price: 10},
  {name: "Ipad", price: 1022},
  {name: "Smart Phone", price: 120},
  {name: "Keyboard", price: 110},
  {name: "Mouse", price: 104},
]

const sumItemPrices = itemPrices.reduce((acc, current) => acc + current.price, 0)

console.log(sumItemPrices)

const users = ["Lorem", "Ipsum", "Derya", "Deniz", "Ipsum", "Deniz", "Lorem"]

const countedUsers = users.reduce((allUsers, current) => {
  const count = allUsers[current] ?? 0;
  return {
    ...allUsers,
    [current]: count + 1
  }
}, {})

console.log(countedUsers)