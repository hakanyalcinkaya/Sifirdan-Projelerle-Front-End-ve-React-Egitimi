// https://www.w3schools.com/js/js_json_datatypes.asp
// https://www.w3schools.com/js/js_json_parse.asp
// https://www.w3schools.com/js/js_json_stringify.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON


const info = `
{
  "user": "username",
  "info": 1234234,
  "arr": [{"i": 1, "k": 2}],
  "isActive": true
}
`

console.log(typeof info)
console.log(info)

const parsedInfo = JSON.parse(info)

console.log(typeof parsedInfo)
console.log(parsedInfo)

const stringifyInfo = JSON.stringify(info)

console.log(typeof stringifyInfo)
console.log(stringifyInfo)
