// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Array:
const systemInfo = ["127.0.0.1", "8000", "development", "admin", "123456", "nginx", "linux"]
console.log(systemInfo[0])

// const ip = systemInfo[0]
// const port = systemInfo[1]
// const dev = systemInfo[2]
// const username = systemInfo[3]
// const password = systemInfo[4]


// systemInfo Array mi ? Object mi ?
// const [ip, port, dev, username, password] = systemInfo
const [ip, port, dev, username, password, ...restInfo] = systemInfo

console.log(ip, port, dev, username, password, restInfo)

// Object:
const user = {
  firstName: "Lorem",
  lastName: "Ipsum Dolor",
  age: 29,
  hobbies: ["dans", "kosu", "bisiklet"],
  info: ["developer", "freelancer", "javascript"]
}

// user Array mi ? Object mi ?
// const {firstName, lastName, age} = user
// -------------------------age: renamedKey
// const {firstName, lastName, age:userAge} = user


// const {firstName, lastName, age:userAge, ...rest} = user

// console.log(firstName, lastName, userAge, rest)

// console.table(user)

const hello = (obj) => {
  console.log(obj.firstName, obj.lastName, obj.age)
}

const helloV2 = ( {firstName, lastName, age} ) => {
  console.log(firstName, lastName, age)
}

const helloV3 = ( obj ) => {
  const {firstName, lastName, age } = obj
  console.log(firstName, lastName, age)
}

helloV2(user)
helloV3(user)